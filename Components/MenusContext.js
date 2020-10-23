import React from "react";
import {MaterialIcons} from '@expo/vector-icons'
import { View, Text } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import {Icon, } from 'react-native-elements'
 export default class MenuContext extends React.PureComponent {
   constructor(props){
     super(props);

   }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Menu
          ref={this.setMenuRef}
          button={
            <MaterialIcons
            onPress ={this.showMenu}
              raised
              name="more-vert"
              size = {32}
              color="gray"
            />
          }
        >
          <MenuItem onPress={()=> {this.hideMenu(), this.props.onPressHandle(this.props.item)}}>Xóa video này khỏi favorite</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>        
        </Menu>
      </View>
    );
  }
}
