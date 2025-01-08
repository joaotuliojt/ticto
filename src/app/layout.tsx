import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ticto",
  description: "Ticto - Gerenciador de finanças",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
