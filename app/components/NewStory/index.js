/**
*
* NewStory
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Grid, Image, Segment, Header, Container, Item } from 'semantic-ui-react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class NewStory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Header dividing as="h3" textAlign="center" style={{marginTop: '1em', marginBottom: '0.5em'}}>Add a Story</Header>
          <Grid>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Text - Solid Background</Header>
          A block of text on a solid background
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Text - Background Image</Header>
          A block of text on a background image
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Text - Background Video</Header>
          A block of text on a background video
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Video - Full Screen</Header>
          A full screen video
        </Segment>
      </Grid.Column>
    </Grid.Row>
        <Grid.Row columns={4}>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Video - With Caption</Header>
          A video with a caption
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Gallery - 3x1</Header>
          A gallery of 3 images
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Gallery - 3x2</Header>
          A gallery of 6 images
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Gallery - 3x3</Header>
          A gallery of 9 images
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
      </Container>
    );
  }
}

NewStory.propTypes = {

};

export default NewStory;
