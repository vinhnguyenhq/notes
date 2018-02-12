import * as React from 'react';
import { Link } from 'react-router-dom';

require('./index.css');

interface ProductDetailsProps {
  id: number;
  name: string;
  amount: number;
  price: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

function ProductDetails({ id, name, amount, price, thumbnail, createdAt, updatedAt }: ProductDetailsProps) {
  return (
    <div className="card">
      <img src={thumbnail} alt={name} style={{ width: '100%' }} />
      <h1>{name}</h1>
      <p className="title">{amount}</p>
      <p>{price.toLocaleString()}</p>
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
