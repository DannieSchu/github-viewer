import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.jsx';

describe('Repo', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Repo 
        name="About-Me"
        html_url="https://github.com/DannieSchu/About-Me"
        language="JavaScript"
        created_at="2020-01-14T00:49:15Z"
        updated_at="2020-01-14T00:49:15Z"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
