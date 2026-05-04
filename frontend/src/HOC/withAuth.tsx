import React from "react";
import { useAppSelector } from "../context/store";
import { AccessDenied } from "../components/common/AccessDenied";
import { Paper, Title } from "@mantine/core";

type WithAuthProps = {
  accessDenied?: React.ReactNode;
};

export function withAuth<P extends object>(Component: React.ComponentType<P>) {

  return (
    function WrappedComponent(props: P & WithAuthProps) {
      const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
      const { accessDenied, ...rest } = props;

      if (!isAuthenticated) {
        return accessDenied ? accessDenied : <AccessDenied />;
      }

      return (
        <Paper  radius="md" withBorder p="xs"  bg="green.1"  c="dark.5">
          <Title order={4}>It's a private page accessible with Authentication only</Title>
          <Component {...(rest as P)} />
        </Paper>
      );
    });
}
