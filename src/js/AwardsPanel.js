import React, { Component } from 'react';
import {
    withTheme,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Divider
} from "@material-ui/core";
import IconTitle from './IconTitle';
import AwardEntry from "./AwardEntry";

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
                    <div className="awards-container">
                        <IconTitle icon="code">Coding Competitions</IconTitle>
                        <AwardEntry
                          title="Google hash code 2018"
                          description="in a team of four"
                          extra="placed 81 / 4856"
                        />
                        <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
                        <IconTitle icon="stars">Awards</IconTitle>
                        <AwardEntry
                            title="Niklaus Wirth Young Talent Computer Science Award"
                            description="for matura paper 'SoNNic'"
                            extra="2017"
                        />
                        </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme(AwardsPanel);