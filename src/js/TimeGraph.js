import React, {Component} from 'react';
import {withTheme} from '@material-ui/core';

import "../styles/TimeGraph.css";
import TimeItem from "./TimeItem";
import TimeItemNow from "./TimeItemNow";

/**
 * Renders time events in a pretty graph.
 * Props:
 * disconnected: if true, items will not be connected with a graph.
 * items: array containing education steps as objects
 * -title: string
 * -year: number (starting year)
 * -location: string
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
          last={items.indexOf(i) === items.length - 1}
          disconnected={this.props.disconnected}>
          {i.content}
        </TimeItem>
      );
    }

    return (
      <div className="graph-container">
        {this.props.disconnected ?? <TimeItemNow/>}

        {graphItems}
      </div>
    );
  }
}

export default withTheme(TimeGraph);