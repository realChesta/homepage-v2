import React, { Component } from 'react';

import '../styles/ProjectEntry.css';
import { withTheme, Fab } from '@material-ui/core';
import GithubIcon from './GithubIcon';

class ProjectEntry extends Component {
    render() {
        const primary = this.props.theme.palette.primary.main;
        const disabledText = this.props.theme.palette.text.disabled;
        return (
            <div className="project-container">
                <div className="project-title">{this.props.title}</div>
                <div style={{ color: disabledText, marginBottom: "10px" }} className="project-description">{this.props.description}</div>
                {this.props.github ? <Fab
                    variant="extended"
                    color="primary"
                    size="small"
                    style={{ float: "right" }}
                    target="_blank"
                    href={this.props.github}>
                    <GithubIcon />
                    <span style={{ marginLeft: "5px" }}>visit</span>
                </Fab> : null}
                {this.props.children}
            </div>
        );
    }
}

export default withTheme()(ProjectEntry);