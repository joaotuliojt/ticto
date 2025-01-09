import { BalanceProvider } from "@/contexts/BalanceContext";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BalanceProvider>{children}</BalanceProvider>;
}
