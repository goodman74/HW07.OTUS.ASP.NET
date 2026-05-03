import { List, Paper,Stack,Text, Title } from "@mantine/core";
import type { CustomerDto } from "./zodType";

export function SuccessResultCustomer({ data }: { data: CustomerDto}) {

  return (
    <Paper  radius="md" withBorder p="xs"  bg="green.1"  c="dark.5">
      <Title order={2}>Result</Title>
      <Stack gap="2px">
        <Text><Text component="span" fw={700}>First Name:</Text> {data.firstName}</Text>
        <Text><Text component="span" fw={700}>Last Name:</Text> {data.lastName}</Text>
        <Text><Text component="span" fw={700}>Email:</Text> {data.email}</Text>
        <Text><Text component="span" fw={700}>Preferences:</Text></Text>
        <List>
          {data.preferences.map((pref, index) => (
            <List.Item key={index}>{pref.name}</List.Item>
          ))}
        </List>
        <Text><Text component="span" fw={700}>Promo Codes:</Text></Text>
        <List>
          {data.promoCodes.map((code, index) => (
            <List.Item key={index}>{code.code}</List.Item>
          ))}
        </List>
      </Stack>
    </Paper>
  );
}
