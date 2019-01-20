import React, {Component} from 'react';
import {withTheme} from '@material-ui/core';
import TitleCard from './TitleCard'

import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <meta name="theme-color" content={this.props.theme.palette.primary.main}/>
        </header>
        <div className="home-content">
          <TitleCard/>
        </div>
      </div>
    );
  }
}

export default withTheme()(Home);