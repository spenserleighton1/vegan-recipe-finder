import React from 'react';
import Loader from './';
import { shallow } from 'enzyme';

describe('Loader', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Loader />)

    expect(wrapper).toMatchSnapshot()
  })
})