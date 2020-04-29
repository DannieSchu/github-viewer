import React from 'react';
import { shallow } from 'enzyme';
import UserDisplay from './UserDisplay.jsx';

describe('UserDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <UserDisplay 
        avatar="https://avatars0.githubusercontent.com/u/55268278?v=4"
        fullName="Dannie Schumaker"
        username="DannieSchu"
        followers="0"
        following="0"
        url="https://github.com/DannieSchu"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
