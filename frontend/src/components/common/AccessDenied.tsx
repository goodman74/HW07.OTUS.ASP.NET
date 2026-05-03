import { Container, Paper, Stack, Title, Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function AccessDenied() {
  const navigate = useNavigate();
  return(
    <Container size="sm" py="xl">
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Title order={2}>401 Доступ запрещён</Title>
          <Text>Вы не прошли аутентификацию.</Text>
          <Text c="dimmed" size="sm">Этот раздел доступен только для пользователей, прошедших аутентификацию.</Text>
          <Button variant="default" onClick={() => navigate(-1)}>Назад</Button>
        </Stack>
      </Paper>
    </Container>
  );
};
