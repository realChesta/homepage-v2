import React, {Component} from 'react';
import {Card, CardContent, CardActions, IconButton, Icon, SvgIcon, Tooltip} from "@material-ui/core";
import moment from 'moment';

import '../styles/TitleCard.css';

class TitleCard extends Component {
  constructor(props) {
    super(props);
    this.birthday = moment([1998, 3, 18]);
  }

  getAge() {
    return moment().diff(this.birthday, 'years');
  }

  render() {
    return (
      <Card className="card">
        <CardContent className="content">
          <label className="typo typo-name">Hello.</label>
          <p className="typo">
            I'm Kyrill, a {this.getAge()} years old first year informatics student at UZH.
          </p>
        </CardContent>
        <CardActions>
          <Tooltip title="My GitHub">
            <IconButton target= "_blank" href="https://github.com/realChesta">
              <SvgIcon>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Send me an e-mail!">
            <IconButton target="_blank" href="mailto:kyrill.hux@gmail.com">
              <Icon>mail</Icon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Matura Paper 'SoNNic'">
            <IconButton target="_blank" href="http://khux.ch/mng/sonnic">
              <SvgIcon>
                <svg version="1.1" id="Layer_1" viewBox="0 0 256 256" className="title-icon">
                  <path id="XMLID_3_" className="st0" d="M182.3,1.9c0,0-29.6,7-48.1,29c0,0,74.6-19,121.1,46.3c0,0-17.7-13.3-54.2-13.2
	c0,0,64.6,36.8,53,118.1c0,0-7.6-30.9-29.2-47.8c0,0,20,74.3-46.1,121.6c0,0,15.7-21.8,13.7-54.4c0,0-36.5,65.6-118.8,53.1
	c0,0,25.8-4.4,48.2-29.1c0,0-70.8,20.5-121.6-46.4c0,0,24,15.9,54.5,13.5c0,0-63.7-33.2-53.1-119.1c0,0,4.2,24.9,29,49.3
	c0,0-20.3-71.5,46.7-122.5c0,0-16.7,26.6-13.3,55C64.1,55.1,99.9-9.8,182.3,1.9z"/>
                </svg>
              </SvgIcon>
            </IconButton>
          </Tooltip>

        </CardActions>
      </Card>
    );
  }
}

export default TitleCard;