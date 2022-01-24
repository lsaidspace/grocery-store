import milk from './product-images/milk.png';
import bread from './product-images/bread.png';
import banana from './product-images/banana.png';
import apple from './product-images/apple.png';

const createProduct = (name, price, image) => {
  return { name, price, image };
};

export const products = [
  createProduct('Milk', 3.97, milk),
  createProduct('Bread', 2.17, bread),
  createProduct('Banana', 0.99, banana),
  createProduct('Apple', 0.89, apple),
];

export const sales = {
  Milk: [2, 5.00],
  Bread: [3, 6.00],
}