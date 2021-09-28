const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

export const formatAsCurrency = (n: number = 0) => currencyFormatter.format(n);
