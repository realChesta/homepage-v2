import React, { Component } from 'react';
import { withTheme, Icon } from "@material-ui/core";

import '../styles/IconTitle.css';

class IconTitle extends Component {
    render() {
        return (
            <div className="icontitle-container">
                <Icon color="primary">{this.props.icon}</Icon>
                <label className="icontitle-label">{this.props.children}</label>
            </div>
        );
    }
}

export default withTheme()(IconTitle);