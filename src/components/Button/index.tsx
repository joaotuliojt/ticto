import styles from "./styles.module.scss";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...rest }, ref) => {
    return (
      <button className={`${styles.button} ${className}`} ref={ref} {...rest} />
    );
  }
);

Button.displayName = "Button";
