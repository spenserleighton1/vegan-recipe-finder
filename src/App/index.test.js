import React from 'react';
import { shallow } from 'enzyme';
import App, { mapDispatchToProps } from './';
import { addRecipes } from '../actions';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
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
