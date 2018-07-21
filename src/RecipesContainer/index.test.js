import React from 'react';
import RecipesContainer from './'
import { shallow } from 'enzyme';

describe('RecipesContainer', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<RecipesContainer />)

    expect(wrapper).toMatchSnapshot()
  })
})