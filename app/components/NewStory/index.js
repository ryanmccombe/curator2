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
        <Header dividing as="h3" textAlign="center" style={{marginTop: '1em', marginBottom: '0.5em'}}>Add a Section</Header>
          <Grid>
    <Grid.Row columns={4}>
      <Grid.Column>
        <Segment onClick={() => this.props.onAdd('text')} style={{cursor: 'pointer'}}>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Header / Text (Image)</Header>
          A block of text with a header on an image background
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment onClick={() => this.props.onAdd('two-column-quote')} style={{cursor: 'pointer'}}>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Header sub>Header / Two Column / Quote</Header>
          A header, 2 columns of text and a quote on an animated background image
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
