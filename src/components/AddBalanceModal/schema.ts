import {z} from "zod"
import { BalanceType } from "./types";

const messages = {
  required: "Campo obrigatório",
} as const;

export const addBalanceSchema = z.object({
  name: z.string().nonempty({message: messages.required}),
  price: z.string().nonempty({message: messages.required}),
  type: z.nativeEnum(BalanceType),
  category: z.string().nonempty({message: messages.required}),
})

export type AddBalanceFormData = z.infer<typeof addBalanceSchema>
