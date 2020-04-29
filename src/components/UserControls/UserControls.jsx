import React from 'react';
import PropTypes from 'prop-types';

const UserControls = ({ username, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={onChange} />
        <button>Get Profile</button>
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
