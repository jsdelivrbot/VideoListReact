import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyCE69hqykbt-O7YTBIlBAZEI0oEUelIfAU';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: '' };

        YTSearch({ key: API_KEY, term: 'basketball'}, (videos) => {
            //this.setState({ videos: videos });
            this.setState({ videos });
        });
    }

  render() {
    return (
      <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
