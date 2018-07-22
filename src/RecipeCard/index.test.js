import React from 'react';
import RecipeCard from './'
import { shallow } from 'enzyme';

describe('RecipeCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<RecipeCard />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchRecipe on click', () => {
    const mockFetchRecipe = jest.fn()
    const wrapper = shallow(<RecipeCard fetchRecipe={ mockFetchRecipe }/>)

    wrapper.find('.recipe-btn').simulate('click')
    expect(mockFetchRecipe).toHaveBeenCalled()
  })
})