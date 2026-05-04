import { Title,Text, Stack, Paper } from "@mantine/core";
import { useAppSelector } from "../../context/store";

export function DemoIdentityPanel() {
  const demoIdentity = useAppSelector(state => state.demoIdentity);

  return (
    <Paper  radius="md" withBorder p="xs"  bg="green.1"  c="dark.5">
      <Title order={2}>Storage DemoIdentity</Title>
      <Stack gap="2px">
        <Text><Text component="span" fw={700}>Email:</Text> {demoIdentity.email ?? "—"}</Text>
        <Text><Text component="span" fw={700}>Password:</Text> {demoIdentity.password ?? "—"}</Text>
        <Text><Text component="span" fw={700}>UserType:</Text> {demoIdentity.userType ?? "—"}</Text>
        <Text><Text component="span" fw={700}>Partner ID:</Text> {demoIdentity.partnerId ?? "—"}</Text>
      </Stack>
    </Paper>
  );
}
