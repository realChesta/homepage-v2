import React, { Component } from 'react';
import {
    withTheme,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Grid
} from "@material-ui/core";

import '../styles/AwardsPanel.css';

class AwardsPanel extends Component {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                    <Icon color="secondary">star</Icon>
                    <Typography style={{ marginLeft: "5px", fontSize: "18px", fontWeight: "regular" }}>
                        Awards and Achievements
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme()(AwardsPanel);