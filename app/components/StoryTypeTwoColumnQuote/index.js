/**
*
* StoryB
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ReactQuill from 'react-quill'

import { Form, Button, TextArea} from 'semantic-ui-react';
import './story.scss';

class StoryB extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '<h1>Two Column Section with Quote</h1>',
      body: '<p>Within months of independence, India and Pakistan were at war in Kashmir, which lies between the two countries.</p>' +
      '<p>Under the partition law, Kashmir was free to accede to India or Pakistan. It had a Muslim majority, but a Hindu princely ruler chose to join India.</p>' +
      '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
      '<p>War broke out in October 1947 after Pakistan supported a Muslim insurgency in Kashmir.</p>' +
      '<p>It lasted until 1 January 1949, with the establishment of a ceasefire line.</p>',
      quote: '"Any idea of a united India could never have worked, and in my judgement, it would have led us to a terrific disaster"'
    };

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike'],
        [{ 'color': ['white', 'black'] }, { 'background': ['white', 'black'] }],
        // ['link', 'image']
        ['clean']
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
    return (
      <div className="story-b">
        <div className="inner ui container editing-container">
          <ReactQuill
            className="story-header"
            theme="bubble"
            modules={this.modules}
            value={this.state.title}
            onChange={(value) => this.handleChange('title', value)}
          />

          <ReactQuill
            className="story-body"
            theme="bubble"
            modules={this.modules}
            value={this.state.body}
            onChange={(value) => this.handleChange('body', value)}
          />

          <ReactQuill
            className="quote"
            theme="bubble"
            modules={this.modules}
            value={this.state.quote}
            onChange={(value) => this.handleChange('quote', value)}
          />
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
