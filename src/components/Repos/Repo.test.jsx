import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.jsx';

describe('Repo', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Repo 
        repoName="About-Me"
        repoUrl="https://github.com/DannieSchu/About-Me"
        language="JavaScript"
        dateCreated="2020-01-14T00:49:15Z"
        dateUpdated="2020-01-14T00:49:15Z"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
