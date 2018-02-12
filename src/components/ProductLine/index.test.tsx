import { configure } from 'enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import { ProductLine } from '../index';

const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

it('renders the correct element with an explicit input', () => {
  const match = { url: '' };
  const productLine =
    shallow(
      <ProductLine
        id={1}
        name="Vinh Nguyen"
        match={match}
      />
    );

  expect(productLine.find('h4').text()).toEqual('Vinh Nguyen');
});
