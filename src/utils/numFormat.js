export const numFormat = (_num) => {
  if (!_num) return 
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(_num)
}
