import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import UserControls from '../../components/UserControls/UserControls.jsx';
import UserDisplay from '../../components/UserDisplay/UserDisplay.jsx';
import Repos from '../../components/Repos/Repos.jsx';
import { fetchUser, fetchRepos } from '../../services/githubData.js';

export default class GithubProfile extends Component {
  state = {
    username: '',
    profile: {},
    repos: []
  }

  handleSubmit = e => {
    e.preventDefault();
    fetchUser(this.state.username)
      .then(profile => this.setState({ profile }));

    fetchRepos(this.state.username)
      .then(repos => this.setState({ repos }));
  }

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  render() {
    const { repos, profile, username } = this.state;

    const display = username === profile.login ?
      <>
        <UserDisplay {...profile} /> 
        <Repos repos={repos} />
      </> 
      : 'Enter a valid username';

    return (
      <>
        <Header />
        <UserControls 
          username={username}
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit} />
        {display}
      </>
    );
  }
}
