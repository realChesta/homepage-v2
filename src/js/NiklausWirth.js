import React, { Component } from 'react';
import { withTheme } from '@material-ui/core';

import '../styles/NiklausWirth.css';

class NiklausWirth extends Component {
    render() {
        const primary = this.props.theme.palette.primary.main;
        const disabledText = this.props.theme.palette.text.disabled;

        return (
            <div className="wirth-container">
                <div className="wirth-title-container">
                    <div className="wirth-title">Niklaus Wirth Young Talent Computer Science Award</div>
                    <div style={{ color: primary, fontSize: "18px" }}>2017</div>
                </div>
                <div style={{ color: disabledText }}>Winner</div>
            </div>
        );
    }
}

export default withTheme()(NiklausWirth);