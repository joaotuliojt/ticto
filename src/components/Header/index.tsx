import Link from "next/link";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Plus } from "@phosphor-icons/react/dist/ssr";
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
        <Button style={{ backgroundColor: "#401A9B" }}>
          <Plus width={16} height={16} weight="bold" />
          Nova transação
        </Button>
      </div>
    </header>
  );
}
