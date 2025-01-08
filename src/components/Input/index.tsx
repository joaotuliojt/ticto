import styles from "./styles.module.scss";
import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input className={`${styles.input} ${className}`} ref={ref} {...rest} />
  );
});

Input.displayName = "Input";
