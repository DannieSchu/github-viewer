import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo.jsx';

const Repos = ({ repos }) => {
  const individualRepos = repos.map(repo => (
    <li key={repo.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {individualRepos}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    repoName: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    dateUpdated: PropTypes.string.isRequired
  })).isRequired
};

export default Repos;
