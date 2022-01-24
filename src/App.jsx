import { useReducer } from 'react';
import Checkout from './components/Checkout';
import ProductSelector from './components/ProductSelector';
import { itemReducer } from './itemsReducer';

function App() {

  const [items, dispatch] = useReducer(itemReducer, {})

  const handleAddProduct = productName => {
    dispatch({ type: 'add', productName });
  };

  const handleRemoveProduct = productName => {
    dispatch({ type: 'remove', productName });
  };

  return (
    <div className="py-10 w-10/12 max-w-md mx-auto">
      <h3 className="mb-4">
        Add products
      </h3>
      <ProductSelector
        onAddProduct={handleAddProduct}
      />
      <div className="h-10" />
      <h3 className="mb-4">
        Checkout
      </h3>
      <Checkout
        items={items}
        onRemove={handleRemoveProduct}
      />
    </div>
  );
}

export default App;
