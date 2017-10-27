import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 6px;
  padding: 0.25em 0.5em;
  margin: 1rem 0rem 1rem 0rem;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
`;

class SearchBar extends Component {
  // construtor method
  constructor(props) {
    super(props);

    // initializing the state of the component (ONLY PLACE TO DO THIS)
    this.state = { term: 'squishymuffinz' };
  }

  // render the content as a component instance (to be exported)
  render () {
    // setState informs React that you've changed the state of the object
    return (
      <div>
        <Input 
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
