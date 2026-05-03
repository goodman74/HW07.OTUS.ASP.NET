import { AppFrame } from "../../layout/AppFrame";
import { AppFooterDefault } from "../../layout/AppFooterDefault";
import { Outlet } from "react-router-dom";
import { AppHeaderDefault } from "../../layout/AppHeaderDefault";
import { Box } from "@mantine/core";

export const stubPartnerID = "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d";

export function PartnerLayout() {

  const header = <AppHeaderDefault title="HOC (HW08)" info="Private Pages"/>;
  const footer = <AppFooterDefault />;

  return (
    <AppFrame header={header} footer={footer}>
      <Box p="md" bg="green.0" c="dark.5">
        <Outlet />
      </Box>
    </AppFrame>
  );
}


