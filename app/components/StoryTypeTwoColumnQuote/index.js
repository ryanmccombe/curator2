/**
*
* StoryB
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Form, Button} from 'semantic-ui-react';
import './story.scss';

class StoryB extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="story-b">
        <div className="inner ui container">
          <h2>Roots of Partition</h2>
          <p>Within months of independence, India and Pakistan were at war in Kashmir, which lies between the two countries.

Under the partition law, Kashmir was free to accede to India or Pakistan. It had a Muslim majority, but a Hindu princely ruler chose to join India.

War broke out in October 1947 after Pakistan supported a Muslim insurgency in Kashmir.

It lasted until 1 January 1949, with the establishment of a ceasefire line.</p>
          <p className="last">"Any idea of a united India could never have worked, and in my judgement, it would have led us to a terrific disaster "</p>
          <div className="wind"></div>
        </div>
      </div>
    );
  }

  static Options = class extends React.PureComponent {
    render() {
      return (
        <Form>
          <Form.Input label="Alignment" />
          <Form.Input label="Background Image" />
          <Form.Input label="Space above content" />
          <Form.Input label="Space below content" />
          <Button type="submit" onClick={this.props.onClose}>Save</Button>
        </Form>
      )
    }
  }
}

StoryB.propTypes = {

};

export default StoryB;
