import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { saveRecipe, deleteRecipe } from '../../actions'
import { SingleRecipeContainer, mapStateToProps, mapDispatchToProps } from './'

describe('SingleRecipeContainer', () => {
  it('should match the snapshot when it has a props object', () => {
    const recipe = { 
      title: 'some title',
      publisher: 'some publisher',
      ingredients: ['carrot', 'another carrot'],
      linkUrl: 'www.com',
      id: 666
    }
    const wrapper = shallow(<SingleRecipeContainer recipe={ recipe }/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when props object is empty', () => {
    const recipe = {}

    const wrapper = shallow(<SingleRecipeContainer recipe={recipe}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call addFavorite when the button is clicked', () => {
    const recipe = { 
      title: 'some title',
      publisher: 'some publisher',
      ingredients: ['carrot', 'another carrot'],
      linkUrl: 'www.com',
      id: 666
    }
    const mockAddFavorite = jest.fn()
    const wrapper = shallow(<SingleRecipeContainer 
      recipe={ recipe } 
      addFavorite={ mockAddFavorite } />)


    wrapper.find('.favorite-btn').simulate('click')

    expect(mockAddFavorite).toHaveBeenCalled()
  })

  it.skip('should call saveRecipeID action when addFavorite is called', () => {
    const recipe = { 
      title: 'some title',
      publisher: 'some publisher',
      ingredients: ['carrot', 'another carrot'],
      linkUrl: 'www.com',
      id: 666
    }
    const mockAuthUser = { uid: 666 }
    const mockAction = jest.fn()
    const wrapper = shallow(<SingleRecipeContainer 
      recipe={ recipe } 
      saveRecipeID={ mockAction } 
      authUser={ mockAuthUser }/>)

    wrapper.instance().addFavorite()

    expect(mockAction).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should return a props object with saveRecipeID', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      const actionToDispatch = saveRecipe({id: 666})

      mappedProps.saveRecipeID({id: 666})
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should return a props object with deleteRecipe', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      const actionToDispatch = deleteRecipe({id: 666})

      mappedProps.deleteRecipe({id: 666})
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const mockState = { singleRecipe: 'sure'};
      const expected = { recipe: 'sure'};

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

})