import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 3px;
  padding: 0.25em 0.5em;
  margin-top: 1rem;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // render the content as a component instance (to be exported)
  render () {
    // onChange event: the prop is the value of user's input
    return <Input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
