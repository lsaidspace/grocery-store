import { products, sales } from './data/products';

const f = (price, saved = 0) => ({ price, saved });

const getPrice = (productName, quantity) => {
  const { price } = products.find(p => p.name === productName);

  if (!sales[productName]) return f(price * quantity);
  const [saleQuantity, salePrice] = sales[productName];

  if (quantity < saleQuantity) return f(price * quantity);

  const remainder = quantity % saleQuantity;
  const includedProducts = quantity - remainder;
  const includedPrice = (includedProducts / saleQuantity) * salePrice;
  const notIncludedPrice = remainder * price;
  const finalPrice = includedPrice + notIncludedPrice;
  return f(finalPrice, (quantity * price) - finalPrice);
};

const addProduct = (productName, state) => {
  if (!state[productName]) return {
    quantity: 1,
    ...getPrice(productName, 1)
  };

  const quantity = state[productName].quantity + 1;
  return {
    quantity,
    ...getPrice(productName, quantity)
  };
};

export function itemReducer(state, { type, productName }) {
  switch (type) {
    case 'add':
      return {
        ...state,
        [productName]: addProduct(productName, state)
      };
    case 'remove':
      const quantity = state[productName].quantity - 1
      if (quantity === 0) {
        let result = { ...state };
        delete result[productName];
        return result;
      }
      return {
        ...state,
        [productName]: {
          quantity,
          ...getPrice(productName, quantity)
        }
      };
    default:
      throw new Error();
  }
}