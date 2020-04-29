import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import UserControls from '../../components/UserControls/UserControls.jsx';
import UserDisplay from '../../components/UserDisplay/UserDisplay.jsx';
import Repos from '../../components/Repos/Repos.jsx';

export default class GithubProfile extends Component {
  state = {
    input: '',
    profile: {},
    repos: []
  }

  handleChange = ({ target }) => {
    this.setState({ input: target.value });
  }

  render() {
    const { profile, repos } = this.state;

    return (
      <>
        <Header />
        <UserControls onNameChange={this.handleChange} />
        <UserDisplay {...profile} />
        <Repos repos={repos} />
      </>
    );
  }
}
