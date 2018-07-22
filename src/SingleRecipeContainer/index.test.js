import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { SingleRecipeContainer } from './'

describe('SingleRecipeContainer', () => {
  it('should match the snapshot when it has a props object', () => {
    const recipe = { 
      title: 'some title',
      publisher: 'some publisher',
      ingredients: ['carrot', 'another carrot'],
      linkUrl: 'www.com',
      id: 666
    }
    const wrapper = shallow(<SingleRecipeContainer recipe={recipe}/>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when props object is empty', () => {
    const recipe = {}

    const wrapper = shallow(<SingleRecipeContainer recipe={recipe}/>)

    expect(wrapper).toMatchSnapshot()
  })
})