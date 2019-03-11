import React, {Component} from 'react';
import {withTheme, Card, CardContent, CardActions, IconButton, Icon, SvgIcon, Tooltip} from "@material-ui/core";
import moment from 'moment';
import GithubIcon from './GithubIcon';
import SonnicIcon from './SonnicIcon';

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
    const primary = this.props.theme.palette.primary.main;

    return (
      <Card className="card">
        <CardContent className="content" style={{ backgroundColor: primary }}>
          <label className="typo typo-name">Hello.</label>
          <p className="typo">
            I'm Kyrill, a {this.getAge()} year old first year informatics student at UZH.
          </p>
        </CardContent>
        <CardActions>
          <Tooltip title="My GitHub">
            <IconButton target= "_blank" href="https://github.com/realChesta">
              <GithubIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Send me an e-mail!">
            <IconButton target="_blank" href="mailto:kyrill.hux@gmail.com">
              <Icon>mail</Icon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Matura Paper 'SoNNic'">
            <IconButton target="_blank" href="http://khux.ch/mng/sonnic">
              <SonnicIcon/>
            </IconButton>
          </Tooltip>

        </CardActions>
      </Card>
    );
  }
}

export default withTheme()(TitleCard);