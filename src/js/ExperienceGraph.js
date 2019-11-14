import React, { Component } from 'react';
import {
    withTheme,
    Icon,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from "@material-ui/core";

import '../styles/ExperienceGraph.css';
import ExperienceItem from './ExperienceItem';

/**
 * ExperienceGraph shows experiences and jobs.
 * Props:
 * items: array containing objects with the following properties:
 * -title: string
 * -start: array: [year, month, day] as integers
 * -end: array of same format, or string "now"
 * -description: string or jsx
 */
class ExperienceGraph extends Component {
    render() {
        let generatedItems = [];

        for (let i of this.props.items) {
            generatedItems.push(
            <ExperienceItem 
              title={i.title} 
              time={i.time}>
                {i.description}
            </ExperienceItem>);
        }

        return (
          <div className="graph-container">
            {generatedItems}
          </div>
        );
    }
}


export default withTheme(ExperienceGraph);