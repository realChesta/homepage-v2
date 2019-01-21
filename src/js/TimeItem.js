import React, {Component} from 'react';
import {withTheme, Grid, Typography, Icon} from '@material-ui/core';

import '../styles/TimeItem.css';

class TimeItem extends Component {

  sizeCallback = (element) => {
    this.refDiv = element;
  };

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    if (this.refDiv) {
      this.setState({height: this.refDiv.clientHeight});
    }
  };

  render() {
    const primary = this.props.theme.palette.primary.main;

    let graphStyle = {
      backgroundColor: primary,
    };
    if (this.state && !this.props.last) {
      //compensate for margin of 10px
      graphStyle["height"] = (this.state.height + 10) || "0px";
    }

    return (
      <div className="item-container" ref={this.sizeCallback}>
        <div className="item-year">
          <label className="year-text">{this.props.year}</label>
        </div>
        <div className="item-dot-wrapper">
          <div className="item-dot" style={{backgroundColor: primary}}/>
          <div className="graph-line" style={graphStyle}/>
        </div>
        <div className="item-title">
          <label className="item-title-text">
            {this.props.title}
          </label>
          {this.props.children}
        </div>
        <div className="item-location">
          <div className="item-location-container">
            <Icon color="secondary">place</Icon>
            <label>{this.props.location}</label>
          </div>
        </div>
      </div>
    );

    let old = <Grid container alignItems="enter" className="item-container">
      <Grid item className="item-year">
        <Typography className="year-text">{this.props.year}</Typography>
      </Grid>
      <Grid item className="item-dot"/>
      <Grid item className="item-title" xs>
        <Typography className="title">
          {this.props.title}
        </Typography>
      </Grid>
      <Grid item className="item-location">
      </Grid>
    </Grid>;
  }
}

export default withTheme()(TimeItem);