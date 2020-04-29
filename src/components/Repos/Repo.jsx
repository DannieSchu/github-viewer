import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repoName, repoUrl, language, dateCreated, dateUpdated }) => {
  return (
    <article>
      <a href={repoUrl} target="blank">{repoName}</a>
      <p>Language: {language}</p>
      <p>Created: {dateCreated}</p>
      <p>Updated: {dateUpdated}</p>
    </article>
  );
};

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateUpdated: PropTypes.string.isRequired
};

export default Repo;
