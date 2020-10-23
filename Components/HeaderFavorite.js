import React, {Component} from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements"


export default class HeaderFavorite extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Favorite'
    }
  }

    render(){
        return (
            
              <Header
                centerComponent={{ text: 'Favorites' , style: { color: '', fontSize: 18, fontWeight:'bold' } }}
                backgroundColor= 'white'
                placement = 'left'
              />
    
          );
    }
}
