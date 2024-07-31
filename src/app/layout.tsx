import type { Metadata } from "next";

import { StyledJsxRegistry } from "@/lib";

export const metadata: Metadata = {
  title: "Empréstimo Online - América Financeira",
  description:
    "Crédito na Sua Conta — Descubra sua melhor opção! Simule agora mesmo um empréstimo pessoal ou consignado com a América Financeira.",
};

import "@/presentation/styles/global.scss";
import "@/presentation/styles/base/reset.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
