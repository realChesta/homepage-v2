import React, { Component } from 'react';
import {
    withTheme,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Grid,
    Divider
} from "@material-ui/core";
import IconTitle from './IconTitle';
import HashCodeEntry from './HashCodeEntry';

import '../styles/AwardsPanel.css';
import NiklausWirth from './NiklausWirth';

class AwardsPanel extends Component {
    render() {
        const disabledText = this.props.theme.palette.text.disabled;

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
                        <HashCodeEntry year="2018" place="81 / 4856">
                        <label style={{color: disabledText, marginTop: "5px"}}>in a team of four</label>
                        </HashCodeEntry>

                        <Divider style={{marginTop: "20px", marginBottom: "20px"}}></Divider>
                        <IconTitle icon="stars">Awards</IconTitle>
                        <NiklausWirth/>
                        </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme()(AwardsPanel);