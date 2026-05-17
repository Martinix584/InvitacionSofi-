import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mis 15 - Sofía",
  description: "Invitación especial a mis 15 años. ¡Te espero!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
