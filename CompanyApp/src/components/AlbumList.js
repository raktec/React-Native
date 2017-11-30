import React, { Component } from 'react';
import axios from 'axios'
import {ScrollView} from 'react-native';

import AlbumDetail from './AlbumDetail';

//const AlbumList =() => {
class AlbumList extends Component{

state = { albums:[] };
componentWillMount() {
  //console.log('Hi Call componentWillMount ');
  //debugger;
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  // .then(response => console.log(response));
  .then(response => this.setState({albums:response.data}));
}
renderAlbums() {
  //console.log(this.state)
return  this.state.albums.map(album =><AlbumDetail key={album.title} album={album}/>);
}
render() {
  //console.log(this.state);
  return (
    <ScrollView>
    {this.renderAlbums()}
    </ScrollView>
  );
}
}

export default AlbumList;
