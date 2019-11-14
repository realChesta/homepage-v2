import React, {Component} from 'react';
import {withTheme} from '@material-ui/core';

import "../styles/TimeGraph.css";
import TimeItem from "./TimeItem";
import TimeItemNow from "./TimeItemNow";

class TimeGraph extends Component {

  render() {
    const disabledText = this.props.theme.palette.text.disabled;

    return (
      <div className="graph-container">
        <TimeItemNow/>
        <TimeItem year="2018" title="University of Zürich" location="Zürich, CH">
          <label style={{maxWidth: "100%", fontWeight: "light", fontStyle: "italic"}}>
            Bachelor of Science in Informatics
            <br/>
            Expected graduation in 2021
          </label>
          <br/>
          <label className="graph-subtitle" style={{color: disabledText}}>
            2018 - present
          </label>
        </TimeItem>
        <TimeItem year="2017" title="ETH Zürich" location="Zürich, CH">
          <label style={{maxWidth: "100%", fontWeight: "light", fontStyle: "italic"}}>
            2 semesters Bsc Inf
          </label>
          <br/>
          <label className="graph-subtitle" style={{color: disabledText}}>
            2017 - 2018
          </label>
        </TimeItem>
        <TimeItem year="2014" title="MNG Rämibühl" location="Zürich, CH">
          <label style={{maxWidth: "100%", fontWeight: "light", fontStyle: "italic"}}>
            Swiss Matura
          </label>
          <br/>
          <label className="graph-subtitle" style={{color: disabledText}}>
            2014 - 2017
          </label>
        </TimeItem>
        <TimeItem year="2008" title="iDSP" location="Paris, FR" last={true}>
          <label style={{maxWidth: "100%", fontWeight: "light", fontStyle: "italic"}}>
            internationale Deutsche Schule Paris
          </label>
          <br/>
          <label className="graph-subtitle" style={{color: disabledText}}>
            2008 - 2014
          </label>
        </TimeItem>
      </div>
    );
  }
}

export default withTheme(TimeGraph);