import React, {Component} from 'react';
import {
  withTheme,
  Icon,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExperienceItem from './ExperienceItem';

import '../styles/ExperiencePanel.css';

class ExperiencePanel extends Component {
  render() {
    return (
      <ExpansionPanel expanded={true}>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Icon color="secondary">work</Icon>
          <Typography style={{marginLeft: "5px", fontSize: "18px", fontWeight: "regular"}}>
            Experience
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ExperienceItem time="August 2018 - present" name="Triboni AG"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withTheme(ExperiencePanel);