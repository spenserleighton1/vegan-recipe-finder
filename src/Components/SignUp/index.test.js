import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from './';
import { auth } from '../firebase'

describe('SignUpForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpForm />)
  })

  it('should start with default state of username,. email, pWord1 pWord2, and error', () => {
    const actual = wrapper.state()
    const expected = {email: "", error: null, passwordOne: "", passwordTwo: "", username: ""}

    expect(actual).toEqual(expected)
  })

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: {name: 'email', value: 'sleepy' }}

    wrapper.instance().handleChange(mockEvent)

    const actual = wrapper.state('email')

    expect(actual).toEqual('sleepy')
  })

  it('should match the snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
