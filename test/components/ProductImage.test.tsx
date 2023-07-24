import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product1 } from '../data/products';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should show chorrectly the component without img', () => {
    const wrapper = renderer.create(
      <ProductImage img={'https://random-test-img.jpg'} className="class-test" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should show chorrectly the component with the img of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
