import { Option } from "@/types/Option";
import { BalanceType } from "./types";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react/dist/ssr";
import { Icon } from "@phosphor-icons/react";

export const balanceTypeIcons = {
  [BalanceType.INPUT]: ArrowCircleUp,
  [BalanceType.OUTPUT]: ArrowCircleDown,
} as const;

type BalanceTypeOption = Option<BalanceType> & {
  icon: Icon;
  activeColor: string;
  color: string;
};

export const balanceTypeOptions: BalanceTypeOption[] = [
  {
    label: "Entrada",
    value: BalanceType.INPUT,
    color: "#06d6a2",
    icon: balanceTypeIcons[BalanceType.INPUT],
    activeColor: "#06d6a21d",
  },
  {
    label: "Saída",
    value: BalanceType.OUTPUT,
    color: "#e23161",
    icon: balanceTypeIcons[BalanceType.OUTPUT],
    activeColor: "#e2316028",
  },
] as const;
