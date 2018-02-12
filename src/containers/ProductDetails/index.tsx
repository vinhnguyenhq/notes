import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { ProductDetails } from '../../components';

interface ProductObj {
  id: number;
  name: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

interface ProductDetailsObj {
  match: {
    params: {
      productId: number;
    };
  };
  data: {
    loading: Boolean;
    error: string;
    networkStatus: Boolean;
    productById: ProductObj;
    search: object;
    loadMore: Function;
  };
}

function ProductDetailsContainer({ data }: ProductDetailsObj) {

  return (
    <div>
      {
        data.loading ? 'loading ...' :
          <ProductDetails
            id={data.productById.id}
            name={data.productById.name}
            amount={data.productById.amount}
            createdAt={data.productById.createdAt}
            updatedAt={data.productById.updatedAt}
          />
      }
    </div>
  );
}

const productDetailsQuery = gql`
  query productById($id: Int!) {
    productById(id: $id) {
      id
      name
      amount
      createdAt
      updatedAt
    }
  }
`;

const ProductDetailsWithQuery = graphql<{}, ProductDetailsObj>(productDetailsQuery, {
  options: props => ({
    variables: {
      id: props.match.params.productId
    }
  })
})(ProductDetailsContainer);

export default ProductDetailsWithQuery;
