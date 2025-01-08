import { BalanceTable } from "@/components/BalanceTable";
import styles from "./styles.module.scss";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function DashboardView() {
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
          value={300}
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
          value={300}
        />
        <Card
          style={{ color: "white", background: "#06d6a2" }}
          title="Saldo Total"
          value={300}
        />
      </div>
      <BalanceTable />
    </main>
  );
}
