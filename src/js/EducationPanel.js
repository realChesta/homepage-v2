import React, {Component} from 'react';
import {
  withTheme,
  Icon,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core";
import TimeGraph from "./TimeGraph";

import '../styles/EducationPanel.css';

class EducationPanel extends Component {
  render() {
    return (
      <ExpansionPanel expanded={true}>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Icon color="secondary">school</Icon>
          <Typography style={{marginLeft: "5px", fontSize: "18px", fontWeight: "regular"}}>
            Education
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="grid-container">
            <TimeGraph/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withTheme()(EducationPanel);