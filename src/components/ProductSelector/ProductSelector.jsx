import { products, sales } from '../../data/products';
import { priceF } from '../../utils';
import SaleBadge from './SaleBadge';

const ProductSelector = ({ onAddProduct }) => (
  <div className="grid grid-cols-2 gap-6 select-none">
    {products.map(({ name, price, image }) => (
      <div
        key={name}
        onClick={() => onAddProduct(name)}
        tabIndex={-1}
        className="rounded-lg p-4 text-center border relative clickable"
      >
        <img className="w-20 mx-auto" src={image} alt="" />
        <h4 className="text-lg font-semibold mt-2">
          {priceF(price)}
        </h4>
        {sales[name] ? (
          <SaleBadge sale={sales[name]} />
        ) : null}
      </div>
    ))}
  </div>
);

export default ProductSelector;
