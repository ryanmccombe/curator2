import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactQuill from 'react-quill';

import messages from './messages';

import { Button, Form, Container, Dropdown } from 'semantic-ui-react';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      body: value
    });
  }

  setEditing(area = false) {
    this.setState({
      editing: area
    });
  }

  getStyleObject(props) {
    const style = {};
    props.backgroundImage ? style.background = `url(${props.backgroundImage}) no-repeat center` : null;
    props.paddingTop ? style.paddingTop = props.paddingTop + 'px' : null;
    props.paddingBottom ? style.paddingBottom = props.paddingBottom + 'px' : null;
    return style;
  }

  render() {
    return (
      <div className="story-type-text left" style={this.getStyleObject(this.props)}>
        <Container className="inner" textAlign={this.props.alignment || 'left'}>

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
        </Container>
      </div>
    );
  }

  static Options = class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.options = [
        {
          key: 'left',
          text: 'Left',
          value: 'left',
        }, {
          key: 'center',
          text: 'Center',
          value: 'center',
        }, {
          key: 'right',
          text: 'Right',
          value: 'right',
        },
      ];
    }


    render() {
      return (
        <Form>
          <Form.Select label="Alignment" fluid selection onChange={(e, { value }) => this.props.onChange('alignment', value)} options={this.options} />
          <Form.Input placeholder="https://femmebot.github.io/google-type/images/indigo-sea.jpg" onChange={(e) => this.props.onChange('backgroundImage', e.target.value)} label="Background Image" />
          <Form.Input placeholder="40" onChange={(e) => this.props.onChange('paddingTop', e.target.value)} label="Space above content" />
          <Form.Input placeholder="80" onChange={(e) => this.props.onChange('paddingBottom', e.target.value)} label="Space below content" />
          <Button type="submit" onClick={this.props.onClose}>Save</Button>
        </Form>
      )
    }
  }
}


export default StoryTypeText;
