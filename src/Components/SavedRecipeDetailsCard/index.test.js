import React from 'react';
import { shallow } from 'enzyme';
import SavedRecipeDetailsCard from './'

describe('SavedRecipeDetailsCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SavedRecipeDetailsCard />)

    expect(wrapper).toMatchSnapshot()
  })
})