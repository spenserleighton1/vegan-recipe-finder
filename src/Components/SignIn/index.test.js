import React from 'react';
import { shallow } from 'enzyme';
import { SignInForm } from './';
import { auth } from '../../firebase'

jest.mock('../../firebase');

describe('SignInForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignInForm />)
  })
  it('should have default state of email, password and error', () => {
    const actual = wrapper.state()
    const expected = {"email": "", "error": null, "password": ""}

    expect(actual).toEqual(expected)
  })

  it.skip('should add a user to firebase when onSubmit is called', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().onSubmit(mockEvent)

    console.log(auth)
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