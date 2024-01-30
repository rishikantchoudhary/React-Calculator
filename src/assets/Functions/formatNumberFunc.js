const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

const formatNumber = (num) => {
  if (num == null) return;
  const [integer, decimal] = num.split(".");
  if (decimal == null) {
    return INTEGER_FORMATTER.format(num);
  }
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

export default formatNumber;
