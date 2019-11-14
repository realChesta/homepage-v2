import React, { Component } from 'react';
import {
    withTheme,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from "@material-ui/core";

import '../styles/ExperienceItem.css';

class ExperienceItem extends Component {
    render() {
        return (
          <div className="item-container">
            <div className="item-time">{this.props.time}</div>
            <div className="item-name">{this.props.name}</div>
            <div className="item-children">{this.props.children}</div>
          </div>
        );
    }
}


export default withTheme(ExperienceItem);