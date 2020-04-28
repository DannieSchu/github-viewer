import React from 'react';
import PropTypes from 'prop-types';

const UserControls = ({ username, onNameChange }) => {
  return (
    <>
      <span>Enter a GitHub username: </span>
      <input type='text' value={username} onChange={onNameChange} />
    </>
  );
};

UserControls.propTypes = {
  username: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default UserControls;
