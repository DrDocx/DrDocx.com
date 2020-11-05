import React from 'react';
import Layout from '@theme/Layout';

import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  CardActions,
  IconButton,
} from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
  return (
    <Layout>
    <Grid
      container
      style={{flexGrow: 1, padding: 50}}
      spacing={10}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src="img/narahari-avatar.jpg"
              >
              </Avatar>
            }
            title="Narahari Rao"
          />
          <CardContent>
            <Typography variant="body" component="p">
              Narahari Rao is a Computing major at UC Santa Barbara interested in software engineering and approximation algorithms.
              He is also an avid badminton player.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton href="https://www.linkedin.com/in/hari387/">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/hari387">
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src="img/faiz-avatar.jpg"
              >
              </Avatar>
            }
            title="Faiz Surani"
          />
          <CardContent>
            <Typography variant="body" component="p">
              Faiz Surani is a Computing major at UC Santa Barbara.
              His current interests include scalable systems and functional programming.
              He likes to make useful things above all.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton href="https://www.linkedin.com/in/faiz-s-74a510126/">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://github.com/ProbablyFaiz">
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </Layout>
  );
}

export default About;