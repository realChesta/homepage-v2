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
  constructor(props) {
    super(props);
    this.educationItems = [
      {
        year: 2008,
        title: "iDSP",
        location: "Paris, FR",
        description: "internationale Deutsche Schule Paris",
        duration: "2008 - 2014"
      },
      {
        year: 2014,
        title: "MNG Rämibühl",
        location: "Zürich, CH",
        description: "Swiss Matura",
        duration: "2014 - 2017"
      },
      {
        year: 2017,
        title: "ETH Zürich",
        location: "Zürich, CH",
        description: "2 semesters Bsc Inf",
        duration: "2017 - 2018"
      },
      {
        year: 2018,
        title: "University of Zürich",
        location: "Zürich, CH",
        description: "Bachelor of Science in Informatics\nExpected graduation in 2022",
        duration: "2018 - present"
      }
    ]
  }

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Icon color="secondary">school</Icon>
          <Typography style={{marginLeft: "5px", fontSize: "18px", fontWeight: "regular"}}>
            Education
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="grid-container">
            <TimeGraph items={this.educationItems}/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withTheme(EducationPanel);