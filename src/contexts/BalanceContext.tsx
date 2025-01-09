"use client";
import { createContext, useContext, useState } from "react";

export type Balance = {
  id: string;
  description: string;
  value: number;
  type: "input" | "output";
  date: Date;
  category: string;
};

interface BalanceContextProps {
  total: number;
  inputs: number;
  outputs: number;
  balances: Balance[];
  onAddBalance: (balance: Omit<Balance, "id">) => void;
  onRemoveBalance: (id: string) => void;
}

export const BalanceContext = createContext<BalanceContextProps>(
  {} as BalanceContextProps
);

export function BalanceProvider({ children }: { children: React.ReactNode }) {
  const [balances, setBalances] = useState<Balance[]>([
    {
      id: "1",
      description: "Salário",
      value: 1200000.5,
      type: "input",
      date: new Date(),
      category: "Salário",
    },
    {
      id: "2",
      description: "Queijo Canastra",
      value: 200000.5,
      type: "output",
      date: new Date(),
      category: "Mercado",
    },
  ]);

  const total = balances.reduce((acc, balance) => {
    if (balance.type === "input") {
      return acc + balance.value;
    } else {
      return acc - balance.value;
    }
  }, 0);

  const inputs = balances.reduce((acc, balance) => {
    if (balance.type === "input") {
      return acc + balance.value;
    } else {
      return acc;
    }
  }, 0);

  const outputs = balances.reduce((acc, balance) => {
    if (balance.type === "output") {
      return acc + balance.value;
    } else {
      return acc;
    }
  }, 0);

  function onAddBalance(balance: Omit<Balance, "id">) {
    const id = Math.random().toString(36).substring(7);
    setBalances((state) => [{ ...balance, id }, ...state]);
  }

  function onRemoveBalance(id: string) {
    setBalances((state) => state.filter((balance) => balance.id !== id));
  }

  return (
    <BalanceContext.Provider
      value={{
        total,
        balances,
        inputs: inputs,
        outputs: outputs,
        onAddBalance,
        onRemoveBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  return useContext(BalanceContext);
}
