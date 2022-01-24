import { priceF } from '../../utils';

const SaleBadge = ({ sale: [quantity, price] }) => {
  return (
    <div
      className="transform -rotate-3 bg-orange-300 px-3 py-0.5 rounded"
    >
      {quantity} x {priceF(price)}
    </div>
  );
};

export default SaleBadge;
