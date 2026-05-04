import { Paper,Text, Title } from '@mantine/core';

type ErrorResultProps = {
  errorMessage: string;
};

export function ErrorResult({ errorMessage }: ErrorResultProps) {

  return (
    <Paper  radius="md" withBorder p="xs" bg="red.4"  c="dark.5">
      <Title order={2}>Error</Title>
      <Text>{errorMessage ?? "An error occurred."}</Text>
    </Paper>
  );
}
