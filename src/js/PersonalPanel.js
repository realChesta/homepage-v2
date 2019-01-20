import React, {Component} from 'react';
import {
  withTheme,
  Icon,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  Tooltip
} from "@material-ui/core";

import '../styles/PersonalPanel.css';
import GridItem from "./GridItem";

class PersonalPanel extends Component {
  render() {
    return (
      <ExpansionPanel className="panel">
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Icon color="secondary">person</Icon>
          <Typography style={{marginLeft: "5px", fontSize: "18px", fontWeight: "regular"}}>
              Personal Details
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="grid-container">
            <GridItem header="Name">
              Kyrill Hux
            </GridItem>
            <GridItem header="E-Mail(s)">
              <a href="mailto:kyrill.hux@gmail.com">kyrill.hux@gmail.com</a>
              <br/>
              <a href="mailto:kyrill.hux@uzh.ch">kyrill.hux@uzh.ch</a>
            </GridItem>
            <GridItem header="Languages">
              <div>
                <Tooltip title="native" placement="top">
                  <Chip label="German" color="primary" className="grid-chip"/>
                </Tooltip>
                <Tooltip title="fluent" placement="top">
                  <Chip label="English" color="primary" className="grid-chip"/>
                </Tooltip>
                <Tooltip title="fluent" placement="top">
                  <Chip label="Russian" color="primary" className="grid-chip"/>
                </Tooltip>
              </div>
            </GridItem>
            <GridItem header="Preferred Programming Languages">
              <div>
                <Chip label="C#" color="secondary" className="grid-chip"/>
                <Chip label="JavaScript" color="secondary" className="grid-chip"/>
                <Chip label="Python" color="secondary" className="grid-chip"/>
                <Chip label="Java" color="secondary" className="grid-chip"/>
              </div>
            </GridItem>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withTheme()(PersonalPanel);