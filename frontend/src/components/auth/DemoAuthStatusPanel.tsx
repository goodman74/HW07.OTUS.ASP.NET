import { Title,Text, Stack, Paper, ActionIcon, Group, Badge } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../context/store";
import { IconLogout } from "@tabler/icons-react";
import { authActions } from "../../context/authSlice";

export function DemoAuthStatusPanel() {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  const authStatus = (
    <Group gap="xs">
      <Text component="span" fw={700}>
      Authenticated:
      </Text>
      {isAuthenticated ? <Badge color="green">Yes</Badge> : <Badge color="red">No</Badge>}
    </Group>
  );

  return (
    <Paper  radius="md" withBorder p="xs"  bg="green.1"  c="dark.5">
      <Title order={2}>AuthStatus</Title>
      <Stack gap={"md"} pb="md">
        {authStatus}
        <Group>
          <Text c="red.5">Logout</Text>
          <ActionIcon variant="light" color="red" onClick={logout} disabled={!isAuthenticated}
            style={!isAuthenticated ? { opacity: 0.4 } : undefined}>
            <IconLogout  />
          </ActionIcon>
        </Group>
      </Stack>
    </Paper>
  );
}
