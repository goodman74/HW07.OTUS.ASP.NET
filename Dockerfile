ARG DOTNET_VERSION=10.0
# -------- base runtime --------
FROM mcr.microsoft.com/dotnet/aspnet:${DOTNET_VERSION} AS base
WORKDIR /app
EXPOSE 8080

# ---------- build ----------
FROM mcr.microsoft.com/dotnet/sdk:${DOTNET_VERSION} AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
# скопировать файлы, которые управляют restore (чтобы улучшить кеш restore)
COPY ./global.json ./
COPY ./*.sln* ./
COPY ./backend/PromoCodeFactory.Core/PromoCodeFactory.Core.csproj ./backend/PromoCodeFactory.Core/
COPY ./backend/PromoCodeFactory.DataAccess/PromoCodeFactory.DataAccess.csproj ./backend/PromoCodeFactory.DataAccess/
COPY ./backend/PromoCodeFactory.WebHost/PromoCodeFactory.WebHost.csproj ./backend/PromoCodeFactory.WebHost/
COPY ./backend/PromoCodeFactory.UnitTests/PromoCodeFactory.UnitTests.csproj ./backend/PromoCodeFactory.UnitTests/

RUN dotnet restore

# теперь весь код
COPY ./backend/PromoCodeFactory.Core/ ./backend/PromoCodeFactory.Core/
COPY ./backend/PromoCodeFactory.DataAccess/ ./backend/PromoCodeFactory.DataAccess/
COPY ./backend/PromoCodeFactory.WebHost/ ./backend/PromoCodeFactory.WebHost/
COPY ./backend/PromoCodeFactory.UnitTests/ ./backend/PromoCodeFactory.UnitTests/

RUN dotnet build -c $BUILD_CONFIGURATION --no-restore

# ---------- publish ----------
FROM build AS publish
RUN dotnet publish ./backend/PromoCodeFactory.WebHost/PromoCodeFactory.WebHost.csproj \
    -c $BUILD_CONFIGURATION -o /app/publish --no-build --no-restore

FROM base AS final
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PromoCodeFactory.WebHost.dll"]
