import * as React from 'react';
import { Link } from 'react-router-dom';

interface ProductLineProps {
  id: number;
  title: string;
  match: {
    url: string
  };
}

function ProductLine({ id, title, match }: ProductLineProps) {
  return (
    <div>
      <Link to={`${match.url}/${id}`}>{title}</Link>
    </div>
  );
}

export default ProductLine;
