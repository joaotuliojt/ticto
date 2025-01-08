"use client";
import {
  ArrowCircleUp,
  X,
  ArrowCircleDown,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "../Input";
import { Button } from "../Button";
import buttonStyles from "../Button/styles.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddBalanceFormData, addBalanceSchema } from "./schema";
import { ErrorLabel } from "../ErrorLabel";
import * as RadioGroup from "@radix-ui/react-radio-group";

export function AddBalanceModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBalanceFormData>({
    resolver: zodResolver(addBalanceSchema),
  });

  const handleAddBalance = (data: AddBalanceFormData) => {
    console.log(data);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button style={{ backgroundColor: "#401A9B" }}>
          <Plus width={16} height={16} weight="bold" />
          Nova transação
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <div className={styles.Header}>
            <Dialog.Title className={styles.Title}>
              Cadastrar Transação
            </Dialog.Title>
            <Dialog.Close className={styles.Close}>
              <X width={24} height={24} weight="bold" />
            </Dialog.Close>
          </div>
          <form
            onSubmit={handleSubmit(handleAddBalance)}
            className={styles.Form}
          >
            <div>
              <Input placeholder="Nome" {...register("name")} />
              {errors.name?.message && (
                <ErrorLabel message={errors.name.message} />
              )}
            </div>
            <div>
              <Input type="number" placeholder="Preço" {...register("price")} />
              {errors.price?.message && (
                <ErrorLabel message={errors.price.message} />
              )}
            </div>
            <div>
              <RadioGroup.Root
                defaultValue="input"
                className={styles.RadioGroup}
              >
                <RadioGroup.Item
                  className={`${styles.RadioOption} ${buttonStyles.button} ${buttonStyles["button--outline"]}`}
                  value="input"
                >
                  <RadioGroup.Indicator
                    className={styles.RadioIndicator}
                    style={{ backgroundColor: "#06d6a21d" }}
                  />
                  <ArrowCircleUp
                    width={24}
                    height={24}
                    color="#06d6a2"
                    weight="regular"
                  />
                  Entrada
                </RadioGroup.Item>
                <RadioGroup.Item
                  id="output"
                  value="output"
                  className={`${styles.RadioOption} ${buttonStyles.button} ${buttonStyles["button--outline"]}`}
                >
                  <RadioGroup.Indicator
                    className={styles.RadioIndicator}
                    style={{ backgroundColor: "#e2316028" }}
                  />
                  <ArrowCircleDown
                    width={24}
                    height={24}
                    color="#e23161"
                    weight="regular"
                  />
                  Saída
                </RadioGroup.Item>
              </RadioGroup.Root>
            </div>
            <div>
              <Input placeholder="Categoria" {...register("category")} />
              {errors.category?.message && (
                <ErrorLabel message={errors.category.message} />
              )}
            </div>
            <Button type="submit">Cadastrar</Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
