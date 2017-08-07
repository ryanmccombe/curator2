/**
*
* Story
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Sidebar, Menu, Segment, Icon, Header, Image } from 'semantic-ui-react'

import './story.scss';

class Story extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="story-a">
        <div className="inner ui container">
          <h2>British Rule in India</h2>
          <p>The British arrived in India in the 1600s, establishing trading posts under the British East India Company which gathered its own enormous private army.</p>
          <p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>
          <p>The bloody struggle set the tone for the political, social and economic rule established by Britain.</p>
        </div>

      </div>
    );
  }
}

Story.propTypes = {

};

export default Story;
