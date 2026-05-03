import { Loader, Text } from "@mantine/core";
import type { ReactNode } from "react";
import type { UiState } from "../../common/types";
import { ErrorResult } from "../public/ErrorResult";

export type ResultBlockProps <T> = {
  uiState: UiState<T>
  children: (data: T) => ReactNode
}

export function ResultBlock<T>({ uiState, children }: ResultBlockProps<T>) {
  switch (uiState.kind) {
  case "idle":
    return <Text>Start request...</Text>;

  case "loading":
    return <Loader color="lime" />;

  case "success":
    return <>{children(uiState.data)}</>;

  case "error":
    return <ErrorResult errorMessage={uiState.message} />;
  }
  // если появится новый kind не описанный в switch TS упадёт здесь
  const _exhaustive: never = uiState;
  return _exhaustive;
}
