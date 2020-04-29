import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos.jsx';

describe('Repos', () => {
  it('matches a snapshot', () => {
    const repos = [{      
      repoName: 'About-Me',
      id: 3529521,
      repoUrl: 'https://github.com/DannieSchu/About-Me',
      language: 'JavaScript',
      dateCreated: '2020-01-14T00:49:15Z',
      dateUpdated: '2020-01-14T00:49:15Z'
    }, {
      repoName: 'Bus-Mall',
      id: 846732,
      repoUrl: 'https://github.com/DannieSchu/Bus-Mall',
      language: 'JavaScript',
      dateCreated: '2020-01-14T00:49:15Z',
      dateUpdated: '2020-01-14T00:49:15Z'
    }];

    const wrapper = shallow(
      <Repos repos={repos} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
