import React, { Component } from 'react';
import { withTheme } from '@material-ui/core';

import '../styles/HashCodeEntry.css';

class HashCodeEntry extends Component {
    render() {
        const primaryColor = this.props.theme.palette.primary.main;
        
        return (
            <div className="hashcode-container">
                <div className="hashcode-content">
                <label className="hashcode-title">Google hash code {this.props.year}</label>
                {this.props.children}
                </div>
                <label className="hashcode-place" style={{ color: primaryColor, fontSize: "18px" }}>placed {this.props.place}</label>
            </div>
        );
    }
}

export default withTheme()(HashCodeEntry);