import { priceF } from '../../utils';
import RemoveButton from './RemoveButton';
import Total from './Total';

export default function Checkout({ items, onRemove }) {
  return (
    <>
      <table className="table-auto w-full select-none">
        <thead>
          <tr className="text-left">
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map(productName => (
            <tr
              key={productName}
              className="h-10"
            >
              <td>{productName}</td>
              <td>{items[productName].quantity}</td>
              <td>{priceF(items[productName].price)}</td>
              <td className="text-center">
                <RemoveButton
                  onClick={() => onRemove(productName)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Total items={items}/>
    </>
  );
}