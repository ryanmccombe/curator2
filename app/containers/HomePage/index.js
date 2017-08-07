/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Sidebar, Menu, Icon, Segment, Container, Form, Checkbox, Label } from 'semantic-ui-react';

import messages from './messages';
import Header from '../../components/Header';
import SubHeader from '../../components/Subheader';
import NewStory from '../../components/NewStory';
import Story from '../../components/Story';
import StoryB from '../../components/StoryB';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Header />
        <SubHeader />

        <Sidebar.Pushable>
          <Sidebar
          as={Menu}
            animation='overlay'
            direction='right'
            visible={visible}
          >
          <Segment basic>
            <Form>
              <Form.Input label='Some Setting' />
              <Form.Input label='Some Other Setting' />
              <Form.Input label='Third Setting' />
              <Button type='submit'>Save</Button>
            </Form>
          </Segment>
          </Sidebar>
          <Sidebar.Pusher>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            <Story />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <StoryB />
        <NewStory />
      </div>
    );
  }
}
