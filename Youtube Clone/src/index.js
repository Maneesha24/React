import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'
import API_KEY from './keys.js';

const KEY = API_KEY;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    }
    this.VideoSearch('Dogs');

  }


  VideoSearch(term){
    YTSearch({key : KEY, term : term}, (videos) => {
        this.setState({
          videos : videos,
        selectedVideo:videos [0]
      });
      });

  }

  render(){
    const videoSearch = _.debounce((term) => {this.VideoSearch(term)},300);

  return(
    <div>
    <SearchBar onSearchTermChange = {videoSearch}/>
    <VideoDetail video = {this.state.selectedVideo} />
    <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos}/>
    </div>
  )};
}

ReactDOM.render(<App />, document.getElementById('container'));
