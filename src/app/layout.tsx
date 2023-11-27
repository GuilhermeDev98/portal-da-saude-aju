import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal Da Saúde - SMS - PMA",
  description:
    "O Portal da Saúde é uma plataforma dedicada aos cidadãos de Aracaju, oferecendo um espaço digital abrangente e acessível para informações e serviços de saúde. Neste site, os moradores podem encontrar recursos valiosos, desde notícias e artigos sobre saúde até orientações sobre cuidados preventivos e tratamentos disponíveis na cidade. Além disso, o Portal da Saúde oferece acesso a agendamentos de consultas, informações sobre unidades de saúde locais, programas de vacinação e serviços de emergência, visando proporcionar uma experiência intuitiva e útil para todos os usuários em busca de cuidados de saúde confiáveis e direcionados para a comunidade de Aracaju.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
