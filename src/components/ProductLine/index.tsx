import * as React from 'react';
import { Link } from 'react-router-dom';

require('./index.css');

interface ProductLineProps {
  id: number;
  name: string;
  match: {
    url: string
  };
}

function ProductLine({ id, name, match }: ProductLineProps) {
  return (
    <div className="card">
      <Link to={`${match.url}/${id}`}>
        <div className="container">
          <h4>{name}</h4>
        </div>
      </Link>
    </div>
  );
}

export default ProductLine;
