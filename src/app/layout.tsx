import type { Metadata } from "next";

import "@/presentation/styles/global.scss";
import "@/presentation/styles/base/reset.scss";

export const metadata: Metadata = {
  title: "Empréstimo Online - América Financeira",
  description:
    "Crédito na Sua Conta — Descubra sua melhor opção! Simule agora mesmo um empréstimo pessoal ou consignado com a América Financeira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
