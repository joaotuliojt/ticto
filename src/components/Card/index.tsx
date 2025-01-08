import styles from "./styles.module.scss";
import { formatCurrency } from "@/utils/format";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: number;
  icon?: React.ReactNode;
  color?: string;
  background?: string;
}

export function Card(props: CardProps) {
  const { icon, title, value, className, ...rest } = props;
  return (
    <div className={`${className} ${styles.card}`} {...rest}>
      <div className={styles.card_header}>
        <p>{title}</p>
        {icon}
      </div>
      <p className={styles.card_currency_value}>{formatCurrency(value)}</p>
    </div>
  );
}
