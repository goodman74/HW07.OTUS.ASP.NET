import { Text, Flex, Stack, Anchor } from "@mantine/core";

export function AppFooterDefault() {
  return (
    <div className="layout-publicFooter" style={{ height: "100%" }}>
      <Flex h="100%" align="center" justify="space-between" px="xl">
        <Text c="gray.2">© 2026 DemoSite</Text>
        <Stack gap={2}>
          <Text c="gray.6">
                Связаться с администратором:{' '}
            <Anchor c="green.5" href="mailto:admin@workshopcode.app">
                    dsivtsov@yahoo.com
            </Anchor>
          </Text>
        </Stack>
      </Flex>
    </div>
  );
}
