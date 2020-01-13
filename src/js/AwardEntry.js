import React, { Component } from 'react';
import { withTheme } from '@material-ui/core';

import '../styles/AwardEntry.css';

class AwardEntry extends Component {
  render() {
    const primary = this.props.theme.palette.primary.main;
    const disabledText = this.props.theme.palette.text.disabled;

    return (
      <div className="award-container">
        <div className="award-title-container">
          <div className="award-title">{this.props.title}</div>
          <div style={{ color: primary, fontSize: "18px" }}>{this.props.extra}</div>
        </div>
        <div className="award-extra" style={{ color: disabledText }}>{this.props.description}</div>
      </div>
    );
  }
}

export default withTheme(AwardEntry);