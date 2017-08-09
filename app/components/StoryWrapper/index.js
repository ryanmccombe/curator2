/**
*
* StoryWrapper
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Sidebar, Form, Menu, Button, Segment, Icon, Container, Dropdown } from 'semantic-ui-react'
import messages from './messages';

import StoryTypeText from '../StoryTypeText'
import StoryTypeTwoColumnQuote from '../StoryTypeTwoColumnQuote'

class StoryWrapper extends React.PureComponent {
  state = { visible: false };
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  selectStoryComponent(storyType) {
    switch(storyType) {
      case 'text':
        return <StoryTypeText />;
      case 'two-column-quote':
        return <StoryTypeTwoColumnQuote />;
    }
  }

  render() {
    const { visible } = this.state;
    const { story } = this.props;
    const themes = [{
      text: 'BBC Red',
      value: 'bbcred'
    }, {
      text: 'BBC White',
      value: 'bbcwhite'
    }, {
      text: 'Black & British',
      value: 'blackbritish'
    }, {
      text: 'Lion',
      value: 'lion'
    }, {
      text: 'Partition',
      value: 'partition'
    }];

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          visible={visible}
        >
          <Segment basic>
            <Form>
              <Form.Input label="Alignment" />
              <Form.Input label="Background Image" />
              <Form.Input label="Space above content" />
              <Form.Input label="Space below content" />
              <Button type="submit" onClick={this.toggleVisibility}>Save</Button>
            </Form>
          </Segment>
        </Sidebar>
        <Sidebar.Pusher>
          <Container style={{ height: 0, position: 'relative', top: '2em', right: 4 }} textAlign="right">
            <Dropdown defaultValue="partition" selection options={themes} button style={{ background: 'rgba(255,255,255,0.5)' }}>
            </Dropdown>
            <Button icon onClick={this.toggleVisibility} style={{background: 'rgba(255,255,255,0.5)' }}>
              <Icon name="setting" />
            </Button>
            <Button icon onClick={() => this.props.onRemove(this.props.index)} style={{ background: 'rgba(255,255,255,0.5)' }}>
              <Icon name="trash" />
            </Button>
          </Container>
          {this.selectStoryComponent(story.type)}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

StoryWrapper.propTypes = {

};

export default StoryWrapper;
