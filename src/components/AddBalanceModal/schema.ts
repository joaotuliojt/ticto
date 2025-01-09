import {z} from "zod"
import { BalanceType } from "./types";

const messages = {
  required: "Campo obrigatório",
  nonnegative: "O valor precisa ser maior que zero",
} as const;

export const addBalanceSchema = z.object({
  name: z.string().nonempty({message: messages.required}),
  price: z.number({required_error: messages.required, invalid_type_error: messages.required}).nonnegative({message: messages.nonnegative}),
  type: z.nativeEnum(BalanceType),
  category: z.string().nonempty({message: messages.required}),
})

export type AddBalanceFormData = z.infer<typeof addBalanceSchema>
