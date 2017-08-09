import React from 'react';

import Header from '../../components/Header';
import SubHeader from '../../components/Subheader';
import NewStory from '../../components/NewStory';
import StoryWrapper from '../../components/StoryWrapper';

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stories: [
        {
          type: 'text'
        }, {
          type: 'two-column-quote'
        }
      ]
    };

    this.addStory = this.addStory.bind(this);
    this.removeStory = this.removeStory.bind(this);
  }

  renderStories() {
    return this.state.stories.map((story, index) =>
      <StoryWrapper key={index} index={index} story={story} onEdit={this.editStory} onRemove={this.removeStory} />
    )
  }

  // TODO: Move to redux
  addStory(type) {
    this.setState((state) => {
      return {
        stories: state.stories.concat({ type })
      }
    })
  }

  // TODO: Move to redux
  removeStory(index) {
    this.setState((state) => {
      return {
        stories: state.stories.splice(index - 1, 1)
      }
    })
  }

  // TODO: Move to redux
  editStory(key, property, value) {

  }

  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        {this.renderStories()}
        <NewStory onAdd={this.addStory} />
      </div>
    );
  }
}
