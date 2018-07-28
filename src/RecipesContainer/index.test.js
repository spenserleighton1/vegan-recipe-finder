import React from 'react';
import { RecipesContainer, mapDispatchToProps, mapStateToProps } from './';
import { shallow, mount } from 'enzyme';
import { addSingleRecipe, isLoading } from '../actions';
import { fetchSingleRecipe } from '../helper/apiCalls';
import { cleanRecipe} from '../helper/dataCleaner';

jest.mock('../helper/apiCalls');
jest.mock('../helper/dataCleaner');

describe('RecipesContainer', () => {
  it('should match the snapshot', () => {
    const mockRecipes = [{ title: 'recipe 1' }, { title: 'recipe 2' }]
    const wrapper = shallow(<RecipesContainer recipes={ mockRecipes }/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke addSingleRecipe when fetch recipe is called', async () => {
    const mockRecipes = [{ title: 'recipe 1' }, { title: 'recipe 2' }]
    const mockAddSingleRecipe = jest.fn();
    const mockIsLoading = jest.fn();
    const wrapper = shallow(<RecipesContainer isLoading={ mockIsLoading } addSingleRecipe={ mockAddSingleRecipe } recipes={ mockRecipes }/>);

    const results = await wrapper.instance().fetchRecipe()

    expect(mockAddSingleRecipe).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should return a props object with addSingleRecipe', () => {
      const mockAddSingleRecipe = jest.fn();
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = addSingleRecipe({ title: 'a recipe' });

      mappedProps.addSingleRecipe({ title: 'a recipe' });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should return a props object with isLoading', () => {
      const mockIsLoading = jest.fn();
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = isLoading({ loading: false });

      mappedProps.isLoading({ loading: false });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const mockState = {recipes: []};
      const expected = {"recipes": []};

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})