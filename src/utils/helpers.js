export const formatPrice = (number) => {
  const formattedNumber = (number / 1000).toFixed(3);
  return formattedNumber.replace('.', ',');
}
