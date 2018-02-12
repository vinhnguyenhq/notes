import { configure } from 'enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import { ProductDetails } from '../index';

const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

it('renders the correct name element with an explicit input', () => {
  const productDetails =
    shallow(
      <ProductDetails
        id={1}
        name="Vinh Nguyen"
        amount={25}
        price={150000}
        thumbnail=""
        createdAt="2017-05-01T19:08:49Z"
        updatedAt="2017-05-01T19:08:49Z"
      />
    );

  expect(productDetails.find('h1').text()).toEqual('Vinh Nguyen');
});

it('renders the correct amount element with an explicit input', () => {
  const productDetails =
    shallow(
      <ProductDetails
        id={1}
        name="Vinh Nguyen"
        amount={25}
        price={150000}
        thumbnail=""
        createdAt="2017-05-01T19:08:49Z"
        updatedAt="2017-05-01T19:08:49Z"
      />
    );

  expect(productDetails.find('.title').text()).toEqual('25');
});
