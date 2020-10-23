import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image, StatusBar } from "react-native";
import HeaderComponent from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import YTSearch from "youtube-api-search";
import FavoriteButton from '../Components/FavoriteButton'
import WatchButton from '../Components/WatchButton'
import { Card } from "react-native-elements";
const API_KEY = "AIzaSyB2MjCAlYjqEku5T5HCwurv5Iz0TAKLSJU";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      videos: []
    };
  }
  onPressSearch = term =>{
    this.searchYT(term);
  }
  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({ loading: false, videos: videos });
    });
  };
  static navigationOptions = {
    header: null,
    };
  render() {  
    const userId = this.props.screenProps.userId;
    return (
      <View style={{ flex: 1, flexDirection: "column"}}>
      <HeaderComponent title = 'Search'></HeaderComponent>
        <SearchBar loading={this.state.loading} onPressSearch={this.onPressSearch} />
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.videos}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginLeft: 25, marginRight: 25, margin: 5, borderBottomColor:'gray', borderBottomWidth:1, paddingBottom: 15, marginBottom:10 }}>
                  <Image
                    style={{ height: 180 }}
                    source={{ uri: item.snippet.thumbnails.medium.url }}
                  ></Image>
                  <Text style ={{fontWeight: '400', fontSize: 18,marginTop: 5}}>{item.snippet.title}</Text>
                  <Text style = {{color: 'gray',marginTop: 5, textAlign: 'right' }}>{item.snippet.channelTitle}</Text>
                  <Text style = {{color: 'gray', marginTop: 5}}>{item.snippet.description}</Text>
                  <View style = {{flexDirection: 'row', flex: 1}}>
                  <WatchButton dataUser = {{videoId: item.id.videoId, userId: userId}}/>
                  <FavoriteButton item = {{item: item, userId: userId}}/>
                  </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}
