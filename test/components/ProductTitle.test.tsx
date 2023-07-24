import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('ProductTitle', () => {
  test('should show chorrectly the component with the custom title defined', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Test" className="class-test" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should show chorrectly the component with the title of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
