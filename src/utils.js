const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const priceF = priceFormat.format