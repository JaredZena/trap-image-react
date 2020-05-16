import React from 'react';

import {ImageList} from './components/image-list/image-list.component';

import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch('https://us-central1-delta-smart-3efb4.cloudfunctions.net/microservice/images?page=1&limit=10')
    .then( response => response.json())
    .then(response => this.setState({images:response.response.data.body.images}));
  }

  render() {
    return (
    <div className="App">
      <ImageList images={this.state.images}></ImageList>
    </div>
    );
  }
}

export default App;
