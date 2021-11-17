const getStringPrice = (price: number, amount: number, discount: number) => {
  return `${price * amount}$ - ${discount}% = ${
    price * amount - Math.round((price * amount) / (100 / discount))
  }$`;
};

const getNumberPrice = (price: number, amount: number, discount: number) => {
  return price * amount - Math.round((price * amount) / (100 / discount));
};

export const getPriceWithDiscount = (
  amount: number,
  price: number,
): { stringPrice: string; numberPrice: number } => {
  if (amount === 3) {
    return {
      stringPrice: getStringPrice(price, amount, 5),
      numberPrice: getNumberPrice(price, amount, 5),
    };
  }

  if (amount === 4) {
    return {
      stringPrice: getStringPrice(price, amount, 6),
      numberPrice: getNumberPrice(price, amount, 6),
    };
  }

  if (amount > 4) {
    return {
      stringPrice: getStringPrice(price, amount, 7),
      numberPrice: getNumberPrice(price, amount, 7),
    };
  }

  return {
    stringPrice: `${price * amount}$`,
    numberPrice: price * amount,
  };
};
