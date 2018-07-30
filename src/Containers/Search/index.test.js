import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapDispatchToProps } from './';
import { addRecipes } from '../../actions';
import { fetchRecipes } from '../../helper/apiCalls';
import { cleanData } from '../../helper/dataCleaner';

jest.mock('../../helper/apiCalls');
jest.mock('../../helper/dataCleaner');

describe('Search', () => {
  let wrapper;
  let mockAddRecipes;

  beforeEach(() => {
    mockAddRecipes = jest.fn()
    wrapper = shallow(<Search addRecipes={ mockAddRecipes }/>)
  })
  it('should have default state userInput of an empty string', () => {
    expect(wrapper.state('userInput')).toEqual('');
  })

  it('should update state when handleChange in invoked', () => {
    const mockEvent = { target: { value: 'tacos' } }
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('userInput')).toEqual('tacos');
  })

  it('should invoke handleSubmit when the form is submit', async () => {
    const mockEvent = { preventDefault: jest.fn() }
    const mockUrl = 'www.com'

    await wrapper.instance().handleSubmit(mockEvent);

    const results = await fetchRecipes(mockUrl)
  })

  describe('mapDispatchToProps', () => {
    it('should return propsObject', () => {
      const mockAddRecipes = jest.fn();
      const mockDispatch = jest.fn();

      const mappedProps = mapDispatchToProps(mockDispatch);
      const actionToDispatch = addRecipes([{title: 'food'}])

      mappedProps.addRecipes([{title: 'food'}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})