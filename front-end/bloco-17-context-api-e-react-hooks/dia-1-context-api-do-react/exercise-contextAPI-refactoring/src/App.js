// src/App.js

import React, { Component } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.selectedSubreddit !== props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  selectSubreddit(nextSubreddit) {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  }

  handleRefreshClick(event) {
    event.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(refreshSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  renderLastUpdatedAt() {
    const { lastUpdated } = this.props;

    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { isFetching } = this.props;

    return (
      <button
        type="button"
        onClick={(event) => this.handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector
          value={selectedSubreddit}
          onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
          options={availableSubreddits}
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={posts} />}
      </div>
    );
  }
}

export default App;
