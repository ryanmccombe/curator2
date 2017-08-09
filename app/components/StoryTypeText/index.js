import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactQuill from 'react-quill';

import messages from './messages';

import { Button } from 'semantic-ui-react';

import './story-type-text.scss';

class StoryTypeText extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      body: '<h1>British Rule in India</h1>' +
            '<p>The British arrived in India in the 1600s, establishing trading posts under the British East India Company which gathered its own enormous private army.</p>' +
            '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
            '<p>The bloody struggle set the tone for the political, social and economic rule established by Britain.</p>'
    };

    this.modules = {
      toolbar: [
        [{ 'header': [1, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{ 'color': ['black', 'white'] }, { 'background': ['white', 'black'] }],
        // ['link', 'image']
      ],
    }
  }

  onSave(value) {
    // console.log(value)
  }

  setEditing(area = false) {
    this.setState({
      editing: area
    });
  }

  render() {
    return (
      <div className="story-type-text left">
        <div className="inner ui container">

          <div className="editing-container">
            <ReactQuill
              theme="bubble"
              modules={this.modules}
              value={this.state.body}
              onChange={this.handleChange}
              onFocus={() => this.setEditing('xbody')}
            />
            {this.state.editing === 'body' ? (
              <Button inverted floated="right" onClick={() => this.setEditing()}>Save</Button>
            ) : null }
          </div>
        </div>
      </div>
    );
  }
}

export default StoryTypeText;
