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

import './story-wrapper.scss';

class StoryWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      storyOptions: {}
    };
    this.toggleVisibility = () => this.setState({ visible: !this.state.visible });
    this.editStory = this.editStory.bind(this);
  }


  selectStoryComponent(storyType) {
    switch(storyType) {
      case 'text':
        return {
          Component: StoryTypeText,
          Options: StoryTypeText.Options,
        };
      case 'two-column-quote':
        return {
          Component: StoryTypeTwoColumnQuote,
          Options: StoryTypeTwoColumnQuote.Options,
        };
    }
  }

  // TODO: Move to redux
  editStory(property, value) {
    this.setState({
      storyOptions: {
        ...this.state.storyOptions,
        [property]: value,
      },
    });
  }

  render() {
    const { visible } = this.state;
    const { story } = this.props;
    const themes = [{
      text: 'Default',
      value: 'default'
    },{
      text: 'Partition',
      value: 'partition'
    }];

    const { Component, Options } = this.selectStoryComponent(story.type);

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          visible={visible}
        >
          <Segment basic>
            <Options onChange={this.editStory} onClose={this.toggleVisibility} />
          </Segment>
        </Sidebar>
        <Sidebar.Pusher className="story">
          <Container className="story-toolbar" style={{ height: 0, position: 'relative', top: '2em', right: 4, zIndex: 5 }} textAlign="right">
            <Dropdown placeholder="Select a Theme" onChange={(e, { value }) => this.editStory('theme', value)} selection options={themes} button style={{ background: 'rgba(255,255,255,0.5)' }}>
            </Dropdown>
            <Button icon onClick={this.toggleVisibility} style={{background: 'rgba(255,255,255,0.5)' }}>
              <Icon name="setting" />
            </Button>
            <Button icon onClick={() => this.props.onRemove(this.props.id)} style={{ background: 'rgba(255,255,255,0.5)' }}>
              <Icon name="trash" />
            </Button>
          </Container>
          <Component {...this.state.storyOptions} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

StoryWrapper.propTypes = {

};

export default StoryWrapper;
