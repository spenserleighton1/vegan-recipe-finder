import React from 'react';
import { shallow } from 'enzyme';
import Header from './'

describe('Header', () => {
  it('should match the snapshot', () => {
    const wrapper = (<Header />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should render an h1 tag with the Header text', () => {
    const wrapper = (<Header />);

    expect(wrapper.find('.header')).to.have.length(1);
  })
})
