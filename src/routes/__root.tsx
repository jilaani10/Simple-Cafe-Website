import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OmniClip AI — Turn one podcast episode into a full content engine" },
      {
        name: "description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete pack of platform-ready assets — LinkedIn posts, X threads, newsletters, and short-form video scripts. One episode in, everything out.",
      },
      {
        property: "og:title",
        content: "OmniClip AI — Turn one podcast episode into a full content engine",
      },
      {
        property: "og:description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete pack of platform-ready assets — LinkedIn posts, X threads, newsletters, and short-form video scripts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "OmniClip AI — Turn one podcast episode into a full content engine",
      },
      {
        name: "twitter:description",
        content:
          "OmniClip AI turns a single podcast transcript into a complete pack of platform-ready assets.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
