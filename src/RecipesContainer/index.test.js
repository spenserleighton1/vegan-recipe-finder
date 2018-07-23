import React from 'react';
import { RecipesContainer, mapDispatchToProps } from './';
import { shallow, mount } from 'enzyme';
import { addSingleRecipe } from '../actions';
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
    const wrapper = shallow(<RecipesContainer addSingleRecipe={ mockAddSingleRecipe } recipes={ mockRecipes }/>);

    const results = await wrapper.instance().fetchRecipe()

    expect(mockAddSingleRecipe).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should return a props object', () => {
      const mockAddSingleRecipe = jest.fn();
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = addSingleRecipe({ title: 'a recipe' });

      mappedProps.addSingleRecipe({ title: 'a recipe' });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})