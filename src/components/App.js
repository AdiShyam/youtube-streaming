import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtubeSearch from "../api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: {}
  };

  componentDidMount() {
    this.onSearchSubmit('Indian cricket team');
  }

  onVideoSelect = video => {
    console.log("the video selected is", video.snippet.title);
    this.setState({ selectedVideo: video });
  };

  onSearchSubmit = async searchValue => {
    const response = await youtubeSearch.get(`/search`, {
      params: {
        q: searchValue
      }
    });
    if (response) {
      console.log(response.data.items);
      this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0]? response.data.items[0]: {}
              
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
