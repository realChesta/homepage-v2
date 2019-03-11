import React, { Component } from 'react';
import {
    withTheme,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Fab
} from '@material-ui/core';

import '../styles/ProjectsPanel.css';
import ProjectEntry from './ProjectEntry';
import SonnicIcon from './SonnicIcon';

class ProjectsPanel extends Component {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Icon color="secondary">layers</Icon>
                    <Typography style={{ marginLeft: "5px", fontSize: "18px", fontWeight: "regular" }}>
                        Some of my Personal Projects
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ padding: 0 }}>
                    <div className="projects-bg-container">
                        <div className="projects-intro">
                            This is a selection of a few personal projects I've worked on. You can find more on my GitHub (see top).
                        </div>
                        <ProjectEntry
                            title="SoNNic"
                            description="A machine learning algorithm that autonomously learns to play the first level of Sonic the Hedgehog using neuroevolution."
                            github="https://github.com/realChesta/SoNNic"
                        >
                            <Fab
                                variant="extended"
                                color="primary"
                                size="small"
                                style={{ float: "right", marginRight: "8px", paddingRight: "10px" }}
                                target="_blank"
                                href="http://khux.ch/mng/sonnic">
                                {true ? <Icon>public</Icon> : <SonnicIcon />}
                                <span style={{ marginLeft: "5px" }}>site</span>
                            </Fab>
                        </ProjectEntry>
                        <ProjectEntry
                            title="Slide Extractor"
                            description="A python script to extract slides from lecture videos and convert them to a PDF file."
                            github="https://github.com/realChesta/slide-extractor"
                        />
                        <ProjectEntry
                            title="SyncPad"
                            description="An online text editor written using react.js with real-time collaboration, allowing multiple users to work on the same file simultaneously."
                            github="https://github.com/realChesta/syncpad"
                        />
                        <ProjectEntry
                            title="Hedgeshock"
                            description="A python script that uses machine learning to detect hedgehogs (or other animals) trying to steal food."
                            github="https://github.com/realChesta/hedgeshock"
                        />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme()(ProjectsPanel);