import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { ProductLine } from '../../components';

interface ProductObj {
  id: number;
  name: string;
  amount: number;
}

interface ProductsObj {
  match: {
    url: string;
  };
  data: {
    loading: Boolean;
    error: string;
    networkStatus: Boolean;
    products: ProductObj[];
  };
}

function Products({ data, match }: ProductsObj) {

  return (
    <div>
      {
        data.loading ? <div className="loading">loading ...</div> :
          data.products.map((post, index) =>
            <ProductLine
              key={index}
              id={post.id}
              name={post.name}
              match={match}
            />
          )
      }
    </div>
  );
}

const productsQuery = gql`
  query {
    products {
      id
      name
      amount
    }
  }
`;

const ProductsWithQuery = graphql<{}, ProductsObj>(productsQuery)(Products);

export default ProductsWithQuery;
