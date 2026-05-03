import { Text, Flex, Stack } from "@mantine/core";

type AppHeaderDefaultProps =
    {
        title : string,
        info?: string,
    }

export function AppHeaderDefault({ title, info }: AppHeaderDefaultProps) {
  return (
    <div className="layout-publicHeader" style={{ height: "100%" }}>
      <Flex h="100%" align="center" justify="space-between" px="xl">
        <Stack gap={2}>
          <Text c="gray.2" size="xl" fw={700}>{title}</Text>
          <Text c="gray.4" size="sm" fw={500}>{info}</Text>
        </Stack>
      </Flex>
    </div>
  );
}
