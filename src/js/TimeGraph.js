import React, {Component} from 'react';
import {withTheme} from '@material-ui/core';

import "../styles/TimeGraph.css";
import TimeItem from "./TimeItem";
import TimeItemNow from "./TimeItemNow";

/**
 * Renders education in a pretty graph.
 * Props:
 * items: array containing education steps as objects
 * -title: string (title of institution)
 * -year: number (starting year)
 * -location: string (location of institution)
 * -description: string (some more text)
 * -duration: string (a duration, rendered below description)
 * -content: JSX or string (anything you'd like to render below the title)
 */
class TimeGraph extends Component {

  render() {
    let graphItems = [];
    const items = this.props.items.sort(i => (i.year)).reverse();

    for (let i of items) {
      graphItems.push(
        <TimeItem 
          year={i.year} 
          title={i.title} 
          location={i.location}
          description={i.description}
          duration={i.duration}
          last={items.indexOf(i) === items.length - 1}>
          {i.content}
        </TimeItem>
      );
    }

    return (
      <div className="graph-container">
        <TimeItemNow/>
        {graphItems}
      </div>
    );
  }
}

export default withTheme(TimeGraph);