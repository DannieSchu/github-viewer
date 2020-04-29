import React from 'react';
import PropTypes from 'prop-types';

const UserDisplay = ({ login, avatar_url, name, followers, following, html_url }) => {
  return (
    <section>
      <img src={avatar_url} alt={name} />
      <article>
        <div>
          <h2>{name}</h2>
          <h3>{login}</h3>
        </div>
        <div>
          <p>Followers:<br/>{followers}</p>
          <p>Following:<br/>{following}</p>
          <a href={html_url} target="blank">{html_url}</a>
        </div>
      </article>
    </section>
  );
};

UserDisplay.propTypes = {
  login: PropTypes.string,  
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  html_url: PropTypes.string    
};

export default UserDisplay;
