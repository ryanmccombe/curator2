import React from 'react';
import _ from 'lodash';

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
          id: 1,
          type: 'text'
        }, {
          id: 2,
          type: 'two-column-quote'
        }
      ]
    };

    this.addStory = this.addStory.bind(this);
    this.removeStory = this.removeStory.bind(this);
  }

  renderStories() {
    return this.state.stories.map((story) =>
      <StoryWrapper key={story.id} id={story.id} story={story} onEdit={this.editStory} onRemove={this.removeStory} />
    )
  }

  // TODO: Move to redux
  addStory(type) {
    this.setState((state) => {
      return {
        stories: state.stories.concat({
          id: this.state.stories.length ? this.state.stories[this.state.stories.length-1].id + 1 : 1,
          type
        })
      }
    })
  }

  // TODO: Move to redux
  removeStory(id) {
    console.log(id);
    console.log(this.state.stories);
    this.setState((state) => {
      return {
        stories: state.stories.filter(story => story.id !== id)
      }
    })
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
