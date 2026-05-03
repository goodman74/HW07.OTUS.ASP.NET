import { Container, Paper, Stack, Title, Button,Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return(
    <Container size="sm" py="xl">
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Title order={2}>404 Страница не найдена</Title>
          <Text>Запрашиваемая страница не существует.</Text>
          <Text c="dimmed" size="sm">Пожалуйста, проверьте URL или вернитесь на предыдущую страницу.</Text>
          <Button variant="default" onClick={() => navigate(-1)}>Назад</Button>
        </Stack>
      </Paper>
    </Container>
  );
};
