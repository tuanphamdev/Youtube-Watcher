import React, {Component} from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements"


export default class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'search'
    }
  }

    render(){
        return (
            
              <Header
                centerComponent={{ text: 'Search' , style: { color: '', fontSize: 18, fontWeight:'bold' } }}
                backgroundColor= 'white'
                placement = 'left'
              />
    
          );
    }
}
