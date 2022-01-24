import { useMemo } from 'react';
import { priceF } from '../../utils';

const getTotal = (items) => {
  return Object.values(items).reduce((acc, item) => {
    acc.total += item.price;
    acc.saved += item.saved;
    return acc;
  }, { total: 0, saved: 0 });
};

const Total = ({ items }) => {
  const { total, saved } = useMemo(() => getTotal(items), [items]);

  return (
    <div className="mt-10 select-none">
      Total price: {priceF(total)}
      <br />
      {saved > 0 && <>You saved {priceF(saved)} today</>}
    </div>
  );
};

export default Total;
