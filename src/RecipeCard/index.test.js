import React from 'react';
import RecipeCard from './'
import { shallow } from 'enzyme';

describe('RecipeCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RecipeCard />)

    expect(wrapper).toMatchSnapshot();
  })
})