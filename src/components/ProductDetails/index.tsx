import * as React from 'react';

interface ProductDetailsProps {
  id: number;
  name: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

function ProductDetails({ id, name, amount, createdAt, updatedAt }: ProductDetailsProps) {
  return (
    <div>
      <h3>ProductDetails - {name}</h3>
      <h4>{amount}</h4>
      <ul>
        <li>{new Date(createdAt).toLocaleString()}</li>
        <li>{new Date(updatedAt).toLocaleString()}</li>
      </ul>
    </div>
  );
}

export default ProductDetails;
