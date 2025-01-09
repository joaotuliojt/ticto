"use client";
import { X, Plus } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "../Input";
import { Button } from "../Button";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddBalanceFormData, addBalanceSchema } from "./schema";
import { ErrorLabel } from "../ErrorLabel";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useBalance } from "@/contexts/BalanceContext";
import { useState } from "react";
import { balanceTypeOptions } from "./constants";
import { BalanceType } from "./types";

export function AddBalanceModal() {
  const [open, setOpen] = useState(false);
  const { onAddBalance } = useBalance();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AddBalanceFormData>({
    resolver: zodResolver(addBalanceSchema),
    defaultValues: {
      type: BalanceType.INPUT,
    },
  });

  const handleAddBalance = (data: AddBalanceFormData) => {
    onAddBalance({
      category: data.category,
      description: data.name,
      date: new Date(),
      type: data.type,
      value: Number(data.price),
    });
    reset();
    setOpen(false);
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
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
              <Input
                type="number"
                step={"0.01"}
                placeholder="Preço"
                {...register("price", { valueAsNumber: true })}
              />
              {errors.price?.message && (
                <ErrorLabel message={errors.price.message} />
              )}
            </div>
            <div>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <RadioGroup.Root
                    defaultValue="input"
                    className={styles.RadioGroup}
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    {balanceTypeOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <RadioGroup.Item
                          key={option.value}
                          className={styles.RadioOption}
                          value={option.value}
                          id={option.value}
                        >
                          <RadioGroup.Indicator
                            className={styles.RadioIndicator}
                            style={{ backgroundColor: option.activeColor }}
                          />
                          <Icon
                            width={24}
                            height={24}
                            color={option.color}
                            weight="regular"
                          />
                          <span id="label">{option.label}</span>
                        </RadioGroup.Item>
                      );
                    })}
                  </RadioGroup.Root>
                )}
              />
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
