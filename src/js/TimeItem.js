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
    const disabledText = this.props.theme.palette.text.disabled;

    let graphStyle = {};
    if (this.state) {
      let height = this.state.height + 10;

      if (this.props.last) {
        height = height * 0.75;
      }

      //compensate for margin of 10px
      graphStyle["height"] = height || "0px";
    }
    if (this.props.last) {
      graphStyle["backgroundImage"] = `linear-gradient(${primary}, rgba(255,0,0,0))`;
    }
    else {
      graphStyle["backgroundColor"] = primary;
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
          <label style={{maxWidth: "100%", fontWeight: "light", fontStyle: "italic"}}>
            {this.props.description}
          </label>
          <label className="graph-subtitle" style={{color: disabledText}}>
            {this.props.duration}
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
  }
}

export default withTheme(TimeItem);