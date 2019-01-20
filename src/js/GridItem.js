import React, {Component} from 'react';
import {Grid} from "@material-ui/core";

class GridItem extends Component {
  render() {
    return (
      <Grid style={{marginBottom: "5px"}} container spacing={16}>
        <Grid item style={{ width: "30%", textAlign: "right", fontWeight: "500" }}>
          <label className="grid-header">{this.props.header}</label>
        </Grid>
        <Grid item xs>
          {this.props.children}
        </Grid>
      </Grid>);
  }
}

export default GridItem;