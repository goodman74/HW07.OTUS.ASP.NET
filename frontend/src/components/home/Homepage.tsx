import { Divider, Group, Stack, Title } from "@mantine/core";
import { AppFrame } from "../../layout/AppFrame";
import { FetchApi } from "../public/FetchApi";
import { AppHeaderHome } from "../../layout/AppHeaderHome";
import { AppFooterDefault } from "../../layout/AppFooterDefault";
import { RegistrationModal } from "../auth/RegistrationModal";
import { useDisclosure } from "@mantine/hooks";
import { DemoIdentityPanel } from "../auth/DemoIdentityPanel";
import { LoginModal } from "../auth/LoginModal";
import { DemoAuthStatusPanel } from "../auth/DemoAuthStatusPanel";
import { PrivateLinks } from "../private/PrivateLinks";

export const stubPartnerID = "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d";

export function HomePage() {
  const [regOpened, reg] = useDisclosure(false);
  const [loginOpened, login] = useDisclosure(false);
  const header = <AppHeaderHome registrationOnClick={() => { reg.open(); }} loginOnClick={() => { login.open(); }} />;
  const footer = <AppFooterDefault />;

  return (
    <>
      <AppFrame header={header} footer={footer}>
        <Group justify="center"  align="flex-start" grow p="md" gap="md">
          <Stack align="center" justify="flex-start">
            <Title order={1} ta="center">
              Public Area
            </Title>
            <Divider w="100%" />
            <FetchApi />
          </Stack>
          <Stack align="center" justify="flex-start">
            <Title order={1} ta="center">
              Private Area
            </Title>
            <Divider w="100%" />
            <DemoIdentityPanel />
            <Divider w="100%" />
            <DemoAuthStatusPanel />
            <Divider w="100%" />
            <PrivateLinks />
          </Stack>
        </Group>
      </AppFrame>
      {
        regOpened && <RegistrationModal
          opened={regOpened}
          onClose={() => reg.close()}
          onRegistered={() => {
          }} />
      }
      {
        loginOpened && <LoginModal
          opened={loginOpened}
          onClose={() => login.close()}
          onLogon={() => {
          }} />
      }
    </>
  );
}


