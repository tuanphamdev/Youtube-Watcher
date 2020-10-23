import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements'
import {firebaseApp} from '../dataRealtime/FirebaseConfig'
import Toast from 'react-native-root-toast';
const accessFirebase = firebaseApp.database();
export default class FavoriteButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            items :[]
        }
    }
    addToFavorites = async (item) => {
        var ListInfo = [];
        await  accessFirebase.ref("InfoVideo").on("child_added", dataSnapshot => {
            ListInfo.push(dataSnapshot.val());
          });
          if(this.checkDuplicateItems(ListInfo, item)){
            this.writeSnippetYoutube(item);
            this.toastAlert('Đã thêm vào favorites');
        }else{
            this.toastAlert('Bạn đã có video này trong favorties')
        }
     
      }
    toastAlert=  (alertText)=>{
        let toast = Toast.show(alertText, {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: false,
            animation: true,
            hideOnPress: true,
            delay: 100,
        });      
        setTimeout(function () {
            Toast.hide(toast);
        }, 2000);
        
    }
    checkDuplicateItems=(ListInfo, item)=>{
        for(var i = 0; i < ListInfo.length; i++ ){
            if( item.id.videoId === ListInfo[i].videoId){
                return false;
            }
        }
        return true;
    }
    writeSnippetYoutube = (item) =>{
        let snippet = {
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            image: item.snippet.thumbnails.medium.url
        };
        accessFirebase.ref('InfoVideo/' ).push({
            videoId:  item.id.videoId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            image: item.snippet.thumbnails.default.url
        });
    }
    render (){
        return(
            <Button
                iconRight = 'true'
                title= 'Add to Favorite'
                icon = {{name: 'favorite'}}
                containerStyle={{ marginTop: 10, backgroundColor: 'red', marginLeft: 10, flex: 50 }}
                onPress = {()=> this.addToFavorites(this.props.item)}                
            >
            </Button>
        )
    }
}