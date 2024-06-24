import type { Metadata } from "next";

import "@/presentation/styles/global.scss";
import "@/presentation/styles/base/reset.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body style={{ fontFamily: "Satoshi" }}>{children}</body>
    </html>
  );
}
