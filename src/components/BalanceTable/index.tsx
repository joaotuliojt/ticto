import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";

export function BalanceTable() {
  return (
    <table className={styles.balance_table}>
      <thead>
        <tr>
          <th>Descricão</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Descrição">Desenvolvimento de website</td>
          <td data-label="Valor" className="deposit">
            R$12.000
          </td>
          <td data-label="Categoria">Desenvolvimento</td>
          <td data-label="Data">13/04/2023</td>
          <td data-label="Ações" className={styles.delete_cell}>
            <button title="Excluir" type="button">
              <Trash className={styles.delete_icon} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
