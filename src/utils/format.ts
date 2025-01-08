export function formatCurrency(value?: number): string {
  if(!value) return "_"

  return value.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })
}
