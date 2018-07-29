import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetailsCard from './'

describe('RecipeDetailsCard', () => {
  it('should match the snapshot', () => {
    const recipe = {
      title: 'neat test',
      publisher: 'neat publisher',
      ingredients: ['neat ingredients'],
      linkUrl: 'www.com',
      id: 666,
    }
    const mockAddFavorite = jest.fn();
    const mockAuthUser = true

    const wrapper = shallow(<RecipeDetailsCard
      {...recipe}
      addFavorite={ mockAddFavorite }
      authUser={ mockAuthUser } />)

    expect(wrapper).toMatchSnapshot()
  })
  it('should call addFavorite when the button is clicked', () => {
     const recipe = {
      title: 'neat test',
      publisher: 'neat publisher',
      ingredients: ['neat ingredients'],
      linkUrl: 'www.com',
      id: 666,
    }
    const mockAddFavorite = jest.fn();
    const mockAuthUser = true

    const wrapper = shallow(<RecipeDetailsCard
      {...recipe}
      addFavorite={ mockAddFavorite }
      authUser={ mockAuthUser } />)

    wrapper.find('.favorite-btn').simulate('click')

    expect(mockAddFavorite).toHaveBeenCalled()
  })
})