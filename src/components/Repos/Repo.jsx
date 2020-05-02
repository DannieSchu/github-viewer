import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url, language, created_at, updated_at }) => {
  return (
    <>
      <a href={html_url} target="blank">{name}</a>
      <p>Language: {language}</p>
      <p>Created: {created_at}</p>
      <p>Updated: {updated_at}</p>
    </>
  );
};

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired
};

export default Repo;
