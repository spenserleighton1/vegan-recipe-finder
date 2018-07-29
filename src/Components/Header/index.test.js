import React from 'react';
import { shallow } from 'enzyme';
import Header from './'

describe('Header', () => {
  it('should match the snapshot with no authUser', () => {
    const wrapper = shallow(<Header authUser={false } />);

    expect(wrapper).toMatchSnapshot();
  })
  it('should match the snapshot with no authUser', () => {
    const wrapper = shallow(<Header authUser={true} />);

    expect(wrapper).toMatchSnapshot();
  })
})
