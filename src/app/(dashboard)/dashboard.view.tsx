"use client";
import { BalanceTable } from "@/components/BalanceTable";
import styles from "./styles.module.scss";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useBalance } from "@/contexts/BalanceContext";

export function DashboardView() {
  const { outputs, inputs, total } = useBalance();
  return (
    <main>
      <Header />
      <div className={styles.cards_container}>
        <Card
          icon={
            <ArrowDownLeft
              color="#06d6a2"
              width={30}
              height={30}
              weight="bold"
            />
          }
          title="Entradas"
          value={inputs}
        />
        <Card
          icon={
            <ArrowUpRight
              color="#e23161"
              width={30}
              height={30}
              weight="bold"
            />
          }
          title="Saídas"
          value={outputs}
        />
        <Card
          style={{ color: "white", background: "#06d6a2" }}
          title="Saldo Total"
          value={total}
        />
      </div>
      <BalanceTable />
    </main>
  );
}
