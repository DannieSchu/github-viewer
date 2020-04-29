import React from 'react';
import Repos from '../Repos/Repos.jsx';

export default function App() {
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

  return (
    <Repos repos={repos} />
  );
}
