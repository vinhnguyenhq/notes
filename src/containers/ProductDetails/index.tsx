import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { ProductDetails } from '../../components';
import Helmet from 'react-helmet';
import { Redirect } from 'react-router';

interface ProductObj {
  id: number;
  name: string;
  amount: number;
  price: number;
  thumbnail: string;
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
    networkStatus: number;
    productById: ProductObj;
  };
}

function ProductDetailsContainer({ data }: ProductDetailsObj) {

  if (!data.loading && data.networkStatus === 7 && !data.productById) {
    return <Redirect to="/products" />;
  }

  return (
    <div>
      <Helmet>
        <title>{!data.loading && data.networkStatus === 7 ? data.productById.name : ''}</title>
      </Helmet>

      {
        !data.loading && data.networkStatus === 7 ?
          <ProductDetails
            id={data.productById.id}
            name={data.productById.name}
            amount={data.productById.amount}
            price={data.productById.price}
            thumbnail={data.productById.thumbnail}
            createdAt={data.productById.createdAt}
            updatedAt={data.productById.updatedAt}
          /> : 'loading ...'
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
      price
      thumbnail
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
