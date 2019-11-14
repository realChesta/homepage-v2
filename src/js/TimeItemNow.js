import React, {Component} from 'react';
import {withTheme} from '@material-ui/core';
import moment from 'moment';

import '../styles/TimeItem.css';

class TimeItemNow extends Component {

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
    const secondary = this.props.theme.palette.secondary.light ;

    let graphStyle = {
      backgroundImage: `linear-gradient(${secondary}, ${primary})`,
    };
    if (this.state && !this.props.last) {
      //compensate for margin of 10px
      graphStyle["height"] = (this.state.height + 10) || "0px";
    }
    console.log(graphStyle);

    return (
      <div className="item-container" style={{minHeight: "30px"}} ref={this.sizeCallback}>
        <div className="item-year">
          <label className="year-text">now</label>
        </div>
        <div className="item-dot-wrapper">
          <div className="item-dot" style={{backgroundColor: secondary}}/>
          <div className="graph-line" style={graphStyle}/>
        </div>
        <div className="item-title">
          <label className="item-title-text">
            {moment().format("MMMM YYYY")}
          </label>
        </div>
    </div>
    );
  }
}

export default withTheme(TimeItemNow);