import React from 'react';
import 'whatwg-fetch';

import MessageSystem from './messageSystem';
import { servicebestallning } from './testData';

import '../css/search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  search() {
    // TODO: Currently we fake the backend response
    fetch('/backend_to_be_implemented').then((response) => {
      if (response.ok) {
        // temporary backend response:
        const exampleSearch = servicebestallning;
        MessageSystem.dispatch(MessageSystem.searchEvent, exampleSearch);
      } else {
        console.log('response not ok');
      }
    }).catch((error) => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`);
    });
  }

  render() {
    return (
      <div id="banner-search">
        <input
          placeholder="ordernummer"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <i className="search-button fa fa-search" onClick={this.search} />
        <br />
      </div>
    );
  }
}


export default Search;
