import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button, Header} from 'react-native-elements';

export default class SearchBar extends Component{
    constructor (props){
        super(props);
        this.state = {
            term : ''
        }
    }
    render(){
        return (
            <View style = {styles.container} >
                  <TextInput style={styles.styleInput}
                    onChangeText = {(value)=> this.setState({term: value})}
                    value = {this.state.term}
                ></TextInput>
                <Button style={styles.buttonStyle} 
                    title={this.props.loading ? 'Loading...' : 'Search'}
                   onPress = {()=>{this.props.onPressSearch(this.state.term)}}
                ></Button>
            </View>
        )                               
    }
}
const styles = StyleSheet.create({
    styleInput: {
        flex: 1,
        borderColor: "red",
        borderWidth: 1,
        backgroundColor: "#cd484a",
        height: 40,
        marginRight: 2,
        borderRadius: 5,
        padding: 5
    },
    buttonStyle: {
        height: 30,
        backgroundColor: 'red'
      },
      container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
      },
})