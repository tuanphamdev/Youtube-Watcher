import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import { firebaseApp } from "../dataRealtime/FirebaseConfig";
const accessFirebase = firebaseApp.database();
export default class WatchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataVideoId: [ ],
        
    }
  }
  render() {
    _handlePressButtonAsync = async videoId => {
      await WebBrowser.openBrowserAsync(
        "https://www.youtube.com/watch?v=" + videoId
      );
    };
    listenForTask = (dataUser)=>{
        accessFirebase.ref("/User/" + dataUser.userId ).child('VideoId').set({
          VideoID: dataUser.videoId,
          Status: "1"
        })
    }

    addVideoId = (dataUser, key) => {
      // let key = accessFirebase.ref("YoutubeVideoId").child('VideoID').push().key;
      let update = {};
      let vID = {
        VideoID: videoId,
        Status: 1
      }
      update[ '/User/' +  '/YoutubeVideoId/' + key] = vID;
      accessFirebase.ref().update(update);
    };
    return (
      <Button
        title="Watch on Youtube"
        icon={{ name: "play-arrow" }}
        containerStyle={{ marginTop: 10, co: 'red'}}
        onPress={() => {
            // _handlePressButtonAsync(this.props.videoId)
            listenForTask(this.props.dataUser);
            // getData();
            // removeVideoId();
        }}
      ></Button>
    );
  }

}
