import React, {Component} from 'react';
import {withTheme} from '@material-ui/core';

import "../styles/TimeGraph.css";
import TimeItem from "./TimeItem";

class TimeGraph extends Component {
  constructor(props) {
    super(props);

    this.dates = [
      {"year": 2018, name: "test1", "location": "location1"},
      {"year": 2017, name: "test2", "location": "location2"},
      {"year": 2016, name: "test3", "location": "location3"},
      {"year": 2014, name: "test4", "location": "location4"},
    ];
  }


  render() {
    //sort by year
    this.dates.sort((a,b) => { return a.year - b.year; });
    this.dates.reverse();

    return (
      <div className="graph-container">
        <TimeItem year="2018" title="test1" location="location1">
          <label style={{ maxWidth: "100%"}}>
            Truncation should be conditionally applicable on this long line of text
            as this is a much longer line than what the container can support.
          </label>
        </TimeItem>
        <TimeItem year="2017" title="test2" location="location2" last={true}>
          <label style={{ maxWidth: "100%"}}>
            Truncation should be conditionally applicable on this long line of text
            as this is a much longer line than what the container can support.
          </label>
        </TimeItem>
      </div>
    );
  }
}

export default withTheme()(TimeGraph);