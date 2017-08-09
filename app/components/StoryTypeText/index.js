import React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactQuill from 'react-quill';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import messages from './messages';

import { Button, Form, Container, Label, Dropdown } from 'semantic-ui-react';

import './story-type-text.scss';

class StoryTypeText extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      body: '<h1>Text Section with Background Image</h1>' +
            '<p>The British arrived in India in the 1600s, establishing trading posts under the British East India Company which gathered its own enormous private army.</p>' +
            '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
            '<p>The bloody struggle set the tone for the political, social and economic rule established by Britain.</p>'
    };


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

  getColourPalette(theme = this.props.theme) {
    if (theme === 'partition') {
      return [
        'black',
        'white',
        '#7cb342',
        '#6e80e2',
        '#bb1919'
      ];
    }
    return ['black', 'white'];
  }

  render() {
    const quillModules = {
      toolbar: [
        [{ 'header': [1, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        // [{'list': 'ordered'}, {'list': 'bullet'}],
        [{ 'color': this.getColourPalette() }, { 'background': this.getColourPalette() }],
        // ['link', 'image']
        ['clean']
      ]
    };


    return (
      <div className={'story-type-text ' + this.props.theme} style={this.getStyleObject(this.props)}>
        <Container className="inner" textAlign={this.props.alignment || 'left'}>

          <div className="editing-container">
            <ReactQuill
              theme="bubble"
              modules={quillModules}
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
      this.state = {
        paddingTop: 40,
        paddingBottom: 80
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, val) {
      this.setState({
        [prop]: val
      });
      this.props.onChange(prop, val)
    }


    render() {
      console.log(this.props);
      return (
        <Form>
          <Label>Alignment</Label>
          <Form.Select fluid selection
                       defaultValue="left"
                       onChange={(e, { value }) => this.props.onChange('alignment', value)}
                       options={this.options} />

          <Label>Background Image</Label>
          <Form.Input placeholder="https://femmebot.github.io/google-type/images/indigo-sea.jpg"
                      onChange={(e) => this.props.onChange('backgroundImage', e.target.value)} />

          <Label>Space Above Content</Label>
          <Slider
            value={this.state.paddingTop}
            min={1}
            max={1200}
            orientation="horizontal"
            onChange={(val) => this.handleChange('paddingTop', val)}
          />

          <Label>Space Below Content</Label>
          <Slider
            value={this.state.paddingBottom}
            min={1}
            max={1200}
            orientation="horizontal"
            onChange={(val) => this.handleChange('paddingBottom', val)}
          />

          <Button type="submit" onClick={this.props.onClose}>Save</Button>
        </Form>
      )
    }
  }
}


export default StoryTypeText;
