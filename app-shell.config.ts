/* eslint-disable @typescript-eslint/no-unused-vars */
import type { HvAppShellConfig } from "@hitachivantara/app-shell";
import type { AppShellVitePluginOptions } from "@hitachivantara/app-shell-vite-plugin";

export default (
  _opts: AppShellVitePluginOptions,
  env: Record<string, string>
): HvAppShellConfig => ({
  name: "Example",
  logo: { name: "HITACHI" },
  theming: {
    theme: "ds5",
    colorMode: "dawn",
  },
  header: {
    actions: [
      {
        bundle: "@hv/help-client/button.js",
        config: {
          url: "https://www.hitachivantara.com/",
          description: "Hitachi Vantara Help Link",
        },
      },
      {
        bundle: "@hv/app-switcher-client/toggle.js",
        config: {
          title: "Apps",
          apps: [
            {
              label: "Hitachi",
              url: "https://www.hitachi.com/",
              target: "NEW",
            },
          ],
        },
      },
    ],
  },
  apps: [
    {
      id: "@self",
      baseUrl: "/",
      views: [
        {
          bundle: "src/pages/home",
          route: "/",
        },
        {
          bundle: "src/pages/management/domain",
          route: "/management/domain",
        },
      ],
    },
    {
      id: "@hv-apps/from-app-shell",
      baseUrl: "http://localhost:9081/",
    },
  ],
  menu: [
    {
      label: "Home",
      target: "/",
      icon: {
        iconType: "uikit",
        name: "Home",
      },
    },
    {
      label: "Domain",
      target: "/management/domain",
      icon: {
        iconType: "uikit",
        name: "Branch",
      },
    },
  ],
  navigationMode: "ONLY_LEFT",
});
