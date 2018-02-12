import * as React from 'react';
import { Link } from 'react-router-dom';

interface ProductLineProps {
  id: number;
  name: string;
  match: {
    url: string
  };
}

function ProductLine({ id, name, match }: ProductLineProps) {
  return (
    <div>
      <Link to={`${match.url}/${id}`}>{name}</Link>
    </div>
  );
}

export default ProductLine;
