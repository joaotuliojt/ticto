import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { AddBalanceModal } from "../AddBalanceModal";
export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <Link href={"/"}>
          <Image
            src={"./logo.svg"}
            width={150}
            height={50}
            alt={"Logo Ticto"}
          />
        </Link>
        <AddBalanceModal />
      </div>
    </header>
  );
}
