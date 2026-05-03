import { Title,Text, Stack, Anchor } from "@mantine/core";
import { Link } from "react-router-dom";

export function PrivateLinks() {

  return (
    <>
      <Stack mb="md">
        <Title order={2}>Links to Private pages</Title>
        <Title order={3}>It's a private page accessible with Authentication only</Title>
        <Text c="gray.6">
            Click on the links below with React Router.
        </Text>
        <Stack>
          <Anchor component={Link} to="/partner/profile">
            Link to Partner Profile page
          </Anchor>
          <Anchor component={Link} to="/partner/limits">
            Link to Partner active Limits page
          </Anchor>
        </Stack>
      </Stack>
    </>
  );
}
