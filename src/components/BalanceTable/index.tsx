import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import { useBalance } from "@/contexts/BalanceContext";
import { formatCurrency } from "@/utils/format";

export function BalanceTable() {
  const { balances, onRemoveBalance } = useBalance();
  return (
    <table className={styles.balance_table}>
      <thead>
        <tr>
          <th>Descricão</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {balances.map((balance) => (
          <tr key={balance.id}>
            <td data-label="Descrição">{balance.description}</td>
            <td
              data-label="Valor"
              className={
                balance.type === "input" ? styles.deposit : styles.withdraw
              }
            >
              {balance.type === "input"
                ? `${formatCurrency(balance.value)}`
                : `-${formatCurrency(balance.value)}`}
            </td>
            <td data-label="Categoria">{balance.category}</td>
            <td data-label="Data">
              {balance.date.toLocaleDateString("pt-br")}
            </td>
            <td data-label="Ações" className={styles.delete_cell}>
              <button
                title="Excluir"
                type="button"
                onClick={() => onRemoveBalance(balance.id)}
              >
                <Trash className={styles.delete_icon} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
