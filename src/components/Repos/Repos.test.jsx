import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos.jsx';

describe('Repos', () => {
  it('matches a snapshot', () => {
    const repos = [{      
      name: 'About-Me',
      id: 3529521,
      html_url: 'https://github.com/DannieSchu/About-Me',
      language: 'JavaScript',
      created_at: '2020-01-14T00:49:15Z',
      updated_at: '2020-01-14T00:49:15Z'
    }, {
      name: 'Bus-Mall',
      id: 846732,
      html_url: 'https://github.com/DannieSchu/Bus-Mall',
      language: 'JavaScript',
      created_at: '2020-01-14T00:49:15Z',
      updated_at: '2020-01-14T00:49:15Z'
    }];

    const wrapper = shallow(
      <Repos repos={repos} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
