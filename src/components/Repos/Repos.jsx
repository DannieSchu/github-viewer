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
    <>
      <h2>Repositories</h2>
      <ul>
        {individualRepos}
      </ul>
    </>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  })).isRequired
};

export default Repos;
