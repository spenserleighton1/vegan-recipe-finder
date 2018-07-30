import React from 'react';
import { shallow } from 'enzyme';
import { SavedRecipesContainer, mapStateToProps, mapDispatchToProps } from './';
import { fetchSingleRecipe } from '../../helper/apiCalls';
import { cleanRecipe} from '../../helper/dataCleaner';
import { addSavedRecipes, saveRecipe, deleteRecipe } from '../../actions';

jest.mock('../../helper/apiCalls');
jest.mock('../../helper/dataCleaner');

describe('SavedRecipesContainer', () => {
  let wrapper;
  let mockRecipes;
  let mockSaved;
  let mockAddSaved;
  let mockAuthUser;
  let mockSaveRecipe

  beforeEach(() => {
    mockAuthUser = { uid: 666 };
    mockSaveRecipe = jest.fn();
    mockAddSaved = jest.fn();
    mockSaved = ['123', '456'];
    mockRecipes = [{title: 'tired'},{title: 'bedtime'}];
    wrapper = shallow(<SavedRecipesContainer
      authUser={ mockAuthUser }
      saveRecipe={ mockSaveRecipe }
      addSavedRecipes={ mockAddSaved }
      savedRecipesFull={ mockRecipes } 
      savedRecipeIDs={ mockSaved }/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('matches the snapshot when there are no superSavedRecipes', () => {
    const wrapper = shallow(<SavedRecipesContainer
      authUser={ mockAuthUser }
      saveRecipe={ mockSaveRecipe }
      addSavedRecipes={ mockAddSaved }
      savedRecipesFull={ [] } 
      savedRecipeIDs={ mockSaved }/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke addSavedRecipes when fetchRecipe is called', async () => {
    const results = await wrapper.instance().fetchRecipes();

    expect(mockAddSaved).toHaveBeenCalled()
  })

  it('should call saveRecipe when addFavs is called', () => {
    wrapper.instance().addFavorite()

    expect(mockSaveRecipe).toHaveBeenCalled()
  })
})

  describe('mapDispatchToProps', () => {
    it('should return a props object with addSavedRecipes', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = addSavedRecipes({ title: 'a recipe' });

      mappedProps.addSavedRecipes({ title: 'a recipe' });
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should return a props object with saveRecipe', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = saveRecipe({ id: 666});

      mappedProps.saveRecipe({ id: 666});
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should return a props object with deleteRecipe', () => {
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = deleteRecipe({ id: 666});

      mappedProps.deleteRecipe({ id: 666});
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const mockState = {"savedRecipeIDs": [], "savedRecipesFull": []};
      const expected = {"savedRecipeIDs": [], "savedRecipesFull": []}

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })