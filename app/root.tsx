import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";

import globalStyles from "~/styles/global.css";
import globalStylesLarge from "~/styles/global-large.css";
import globalStylesMedium from "~/styles/global-medium.css"; // or "@remix-run/cloudflare"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStyles,
    },
    {
      rel: "stylesheet",
      href: globalStylesMedium,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalStylesLarge,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
