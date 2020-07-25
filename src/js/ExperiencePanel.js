import React, {Component} from 'react';
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
import TimeGraph from './TimeGraph';

import '../styles/ExperiencePanel.css';

class ExperiencePanel extends Component {
  constructor(props) {
    super(props);
    this.workItems = [
      {
        year: 2019,
        title: "Triboni AG",
        location: "Zürich, CH",
        description: <span>Software Engineer<br/>40%</span>,
        duration: "Aug. 2019 - Jul. 2020"
      },
      {
        year: 2020,
        title: "SEC Consult (Schweiz) AG",
        location: "Zürich, CH",
        description: <span>Associate Security Consultant<br/>(Intern) 100%</span>,
        duration: "Jul. 2020 - present"
      }
    ];
    this.otherItems = [
      {
        year: 2019,
        title: "University of Zürich",
        location: "Zürich, CH",
        description: "Informatics I Tutor",
        duration: "Sep. 2019 - Dez. 2019"
      }
    ]
  }

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Icon color="secondary">work</Icon>
          <Typography style={{marginLeft: "5px", fontSize: "18px", fontWeight: "regular"}}>
            Experience
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="experience-container">
            <IconTitle icon="class">Work Experience</IconTitle>
            <TimeGraph items={this.workItems}/>
            <Divider style={{marginTop: "20px", marginBottom: "20px"}}/>
            <IconTitle icon="speaker_notes">Other Experience</IconTitle>
            <TimeGraph items={this.otherItems} disconnected={true}/>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withTheme(ExperiencePanel);