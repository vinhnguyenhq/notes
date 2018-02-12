import * as React from 'react';
import { Link } from 'react-router-dom';

require('./index.css');

interface ProductDetailsProps {
  id: number;
  name: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

function ProductDetails({ id, name, amount, createdAt, updatedAt }: ProductDetailsProps) {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p className="title">{amount}</p>
      <div>
        <p>Create - {new Date(createdAt).toLocaleString()}</p>
        <p>Update - {new Date(updatedAt).toLocaleString()}</p>
      </div>
      <Link to={`/products`}>
        <p><button>Back</button></p>
      </Link>
    </div>
  );
}

export default ProductDetails;
