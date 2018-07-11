import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCY0VovjZkEjpCAl1nZYIb56Fh-dxz9ry8';

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
    YTSearch({key : API_KEY, term : term}, (videos) => {
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
