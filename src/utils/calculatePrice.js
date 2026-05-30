const calculatePrice = (
  quantity,
  price
) => {
  if (!quantity || !price) {
    return 0;
  }

  return Number(quantity) * Number(price);
};

export default calculatePrice;