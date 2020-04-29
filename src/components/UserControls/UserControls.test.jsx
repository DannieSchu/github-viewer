import React from 'react';
import { shallow } from 'enzyme';
import UserControls from './UserControls.jsx';

describe('UserControls', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <UserControls 
        username='DannieSchu' 
        onNameChange={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
