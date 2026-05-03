import { AppShell } from '@mantine/core';
import type { ReactNode } from 'react';
import type React from "react";

export type AppFrameProps =
    React.PropsWithChildren<{
        header: ReactNode;
        footer: ReactNode;
    }>

const HEADER_HEIGHT = 100;
const FOOTER_HEIGHT = 100;

const APP_SHELL_STYLES = {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    "--app-shell-border-color": "#2a3c62",
  },
  main: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    paddingTop: "var(--app-shell-header-offset)",
    paddingBottom: "var(--app-shell-footer-offset)",
  },
} as const;

export function AppFrame({header,footer,children}: AppFrameProps) {
  return (
    <div className="layout-publicBg">
      <AppShell
        padding={0}// отключаем дефолтные padding Mantine — все отступы контролируем вручную
        header={{ height: HEADER_HEIGHT }}
        footer={{ height: FOOTER_HEIGHT }}
        styles={APP_SHELL_STYLES}
      >
        <AppShell.Header >
          {header}
        </AppShell.Header>

        <AppShell.Main>
          {children}
        </AppShell.Main>

        <AppShell.Footer >
          {footer}
        </AppShell.Footer>
      </AppShell>
    </div>
  );
}
