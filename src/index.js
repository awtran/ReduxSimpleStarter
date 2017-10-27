// import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB0QCJ8Xxma86Un5qN0jDm5FvmeFhQ7ev4';

// our homemade components 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const Div = styled.div`
  background-color: rebeccapurple;
  border-radius: 8px;
  border: 0px solid #ccc;
  padding: 2rem;
  margin: 1rem;
  height: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.3);
`;

const Heading = styled.h3`
  font-weight: 800;
  color: white;
`;

// changed to class based component
class App extends Component {
  constructor(props) {
    super(props);

    // initially creates the state as an empty array
    this.state = { videos: [] };

    // this API/Function call kicks off the search and with the data,
    // sets the state of the component to have the data 
    YTSearch({key: API_KEY, term: 'squishymuffinz'}, (videos) => {
      // SIMILAR TO: this.setState({ videos: videos })
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <Div>
          <Heading>Youtube Search</Heading>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
        </Div>
      </div>
    );
  }
}

// place the new component's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
