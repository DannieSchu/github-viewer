import React from 'react';
import PropTypes from 'prop-types';

const UserControls = ({ username, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        Enter a GitHub username:
        <input type='text' value={username} onChange={onChange} />
        <button>Go!</button>
      </form>
    </>
  );
};

UserControls.propTypes = {
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserControls;
