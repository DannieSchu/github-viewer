# GitHub Viewer

## Overview
See a GitHub user's profile by entering! When you enter a valid username, the app displays the following info:
* Avatar
* Full name
* Username
* Number of followers
* Number of users they are following
* Link to Github page
* First 30 repositories
  * Name of each repo (with link)
  * Language each repo used
  * Dates when it was created and last updated

## App Organization
This app was created using React. Files are separated into stateful container components and stateless presentation components. 

## API Services 
User data is sourced from the GitHub API.
* User profile data: `https://api.github.com/users/:username`
* Repo data: `https://api.github.com/users/:username/repos`
