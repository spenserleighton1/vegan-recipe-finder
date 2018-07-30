import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapDispatchToProps } from './';
import { addRecipes, isLoading } from '../../actions';
import { fetchRecipes } from '../../helper/apiCalls';
import { cleanData } from '../../helper/dataCleaner';

jest.mock('../../helper/apiCalls');
jest.mock('../../helper/dataCleaner');

describe('App', () => {
  it('should match the snapshot', () => {
    const mockAddRecipes = jest.fn();
    const mockIsLoading = jest.fn();
    const wrapper = shallow(<App isLoading={ mockIsLoading } addRecipes={ mockAddRecipes }/>)

    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call addRecipes on componentDidMount', async () => {
    const mockAddRecipes = jest.fn();
    const wrapper = shallow(<App addRecipes={ mockAddRecipes }/>);
     
    wrapper.instance().componentDidMount();
    await expect(fetchRecipes).toHaveBeenCalled();
  })

  describe('mapDispatchToProps', () => {
    it('should return propsObject', () => {
      const mockAddRecipes = jest.fn();
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      const actionToDispatch = addRecipes([{title: 'food'}]);

      mappedProps.addRecipes([{title: 'food'}]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
