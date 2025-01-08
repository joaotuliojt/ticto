import styles from "./styles.module.scss";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", className, ...rest }, ref) => {
    return (
      <button
        className={`${styles.button} ${
          styles[`button--${variant}`]
        } ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
