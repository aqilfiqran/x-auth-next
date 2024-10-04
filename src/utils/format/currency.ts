export function formatCurrency({
  value,
  currency = 'IDR',
  country = 'id-ID',
  options = {},
}: {
  value: number;
  currency?: string;
  country?: string;
  options?: Intl.NumberFormatOptions;
}) {
  return new Intl.NumberFormat(country, {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
    currency,
  }).format(value);
}
