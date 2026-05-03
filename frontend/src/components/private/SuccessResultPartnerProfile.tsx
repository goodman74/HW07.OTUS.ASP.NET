import { Paper,Stack,Text, Title } from "@mantine/core";
import type { PartnerDto } from "../public/zodType";

export function SuccessResultPartnerProfile({ data }: { data: PartnerDto}) {

  return (
    <Paper  radius="md" withBorder p="xs"  bg="green.1"  c="dark.5">
      <Title order={2}>Result</Title>
      <Title order={3}>PartnerProfile</Title>
      <Stack gap="2px">
        <Text><Text component="span" fw={700}>Name: </Text>{data.name}</Text>
        <Text><Text component="span" fw={700}>Is Active: </Text>{data.isActive ? "Yes" : "No"}</Text>
      </Stack>
    </Paper>
  );
}
