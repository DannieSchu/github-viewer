import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ avatar, fullName, username, followers, following, url }) => {
  return (
    <>
      <img src={avatar} alt={fullName} />
      <section>
        <article>
          <h2>{fullName}</h2>
          <h3>{username}</h3>
        </article>
        <article>
          <p>Followers:<br/>{followers}</p>
          <p>Following:<br/>{following}</p>
          <a href={url} target="blank">{url}</a>
        </article>
      </section>
    </>
  );
};

UserDisplay.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserDisplay;
