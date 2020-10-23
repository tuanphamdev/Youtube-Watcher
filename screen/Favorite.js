import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import HeaderFavorite from "../Components/HeaderFavorite";
import { firebaseApp } from "../dataRealtime/FirebaseConfig";
import MenuContext from '../Components/MenusContext'
const itemRef = firebaseApp.database();
export default class Favorite extends React.Component {
  static navigationOptions = {
    title: "Favorites"
  };

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  litenForItem = () => {
    var items = [];
        itemRef.ref("InfoVideo").on("child_added", dataSnapshot => {
          if(dataSnapshot.length !==0){
            items.push({
              infoVideo: dataSnapshot.val(),
              key: dataSnapshot.key
      
            })
            this.setState({items})
          }
         
      });
  };
  handelClickDeleteFavoriteItems = (item)=>{
      itemRef.ref("InfoVideo").child(item.key).remove();
      let arr =  this.state.items;
      let index = arr.indexOf(item);
      if(index !== -1){
        arr.splice(index, 1);
        this.setState({arr});
      }
  }
 
  render() {
    
    return (
      <View style={styles.container}>
        <HeaderFavorite></HeaderFavorite>
        <FlatList
          style={{ marginTop: 5 }}
          data={this.state.items}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, index }) => {
            return (
              <View style = {{flex: 1}}>
                <View style={styles.itemFlatList}>
                <View style = {{flex: 40}} >
                  <Image
                    style={{ height: 90, width: 120 }}
                    source={{ uri: item.infoVideo.image }}
                  ></Image>
                </View>
                <View style = {{flex: 60}}>
                  <Text style = {{fontSize: 15, fontWeight:'400'}}>{item.infoVideo.title}</Text>
                  <Text style={{ marginTop: 5, padding: 5 }}>{item.infoVideo.channelTitle}</Text>
                </View>
               
              </View>
              <View style= {{position: 'absolute', alignSelf: 'flex-end', flex: 1}} >
                     <MenuContext onPressHandle = {this.handelClickDeleteFavoriteItems}
                                  item = {item}></MenuContext>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    );
  }
  componentDidMount() {
    this.litenForItem()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  itemFlatList: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom:10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginRight: 25,
    marginLeft: 25
  }
});
