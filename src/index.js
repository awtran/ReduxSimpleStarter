// import React
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import components from component folder
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDROeP_siY9GEVpD6mS6SdOodl-8iM0EKw';

const Div = styled.div`
  background-color: rebeccapurple;
  border-radius: 8px;
  border: 0px solid #ccc;
  padding: 2rem;
  margin: 1rem;
  color: white;
  box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.3);
`;

// create a new component; component should produce html
const App = () => {
  return (
    <div>
      <Div>
        <h2>Youtube Search</h2>
        <SearchBar />
      </Div>
    </div>
  );
}

// place the new component's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
