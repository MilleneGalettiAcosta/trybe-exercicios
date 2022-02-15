import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPostsBySubreddit } from '../services/redditAPI';

const { Provider, Consumer } = MyContext;

class MyProvider extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            postsBySubreddit: {
                frontend: {},
                reactjs: {},
              },
              selectedSubreddit: 'reactjs',
              shouldRefreshSubreddit: false,
              isFetching: false,
        };

    this.fetchPosts = this.fetchPosts.bind(this);
    this.shouldFetchPosts = this.shouldFetchPosts.bind(this);
    this.handleFetchSuccess = this.handleFetchSuccess.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);
    this.handleSubredditChange = this.handleSubredditChange.bind(this);
    this.handleRefreshSubreddit = this.handleRefreshSubreddit.bind(this);
    }

}