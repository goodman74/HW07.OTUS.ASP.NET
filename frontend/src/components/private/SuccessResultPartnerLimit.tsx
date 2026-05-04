import { List, Paper,Stack,Text, Title } from "@mantine/core";
import type { PartnerDto } from "../public/zodType";

export function SuccessResultPartnerLimit({ data }: { data: PartnerDto}) {

  return (
    <Paper  radius="md" withBorder p="xs"  bg="green.1"  c="dark.5">
      <Title order={2}>Result</Title>
      <Title order={3}>PartnerLimit</Title>
      <Stack gap="2px">
        <Text><Text component="span" fw={700}>Partners Limits:</Text></Text>
        <List>
          {data.partnerLimits.map((rec) => (
            <List.Item key={rec.id}>
              <Text><Text component="span" fw={700}>Id: </Text>{rec.id}</Text>
              <Text><Text component="span" fw={700}>CreatedAt: </Text>{rec.createdAt.toDateString()}</Text>
              <Text><Text component="span" fw={700}>Limit: </Text>{rec.limit}</Text>
              <Text><Text component="span" fw={700}>IssuedCount: </Text>{rec.issuedCount}</Text>
            </List.Item>
          ))}
        </List>
      </Stack>
    </Paper>
  );
}
