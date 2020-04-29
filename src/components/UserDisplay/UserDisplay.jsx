import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ avatar, fullName, username, followers, following, url }) => {
  return (
    <section>
      <img src={avatar} alt={fullName} />
      <article>
        <div>
          <h2>{fullName}</h2>
          <h3>{username}</h3>
        </div>
        <div>
          <p>Followers:<br/>{followers}</p>
          <p>Following:<br/>{following}</p>
          <a href={url} target="blank">{url}</a>
        </div>
      </article>
    </section>
  );
};

UserDisplay.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default UserDisplay;
