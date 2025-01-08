import styles from "./styles.module.scss";
export function ErrorLabel({ message }: { message: string }) {
  return <span className={styles.error_label}>{message}</span>;
}
