import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { ProductLine } from '../../components';

interface ProductObj {
  id: number;
  title: string;
}

interface ProductsObj {
  match: {
    url: string;
  };
  data: {
    loading: Boolean;
    error: string;
    networkStatus: Boolean;
    posts: ProductObj[];
    search: object;
    loadMore: Function;
  };
}

function Products({ data, match }: ProductsObj) {

  return (
    <div>
      <h2>Products</h2>

      {data.posts ?
        data.posts.map((post, index) =>
          <ProductLine
            key={index}
            id={post.id}
            title={post.title}
            match={match}
          />) : null}
    </div>
  );
}

const productsQuery = gql`
  query ($q: String!, $end: String) {
    search(first: 20, type: REPOSITORY, query: $q, after: $end) {
      nodes {
        ... on Repository {
          name
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const ProductsWithQuery = graphql<{}, ProductsObj>(productsQuery, {
  options: {}
})(Products);

export default ProductsWithQuery;
