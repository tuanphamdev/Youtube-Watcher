import React  from 'react'
import {View,StyleSheet,Text, TouchableOpacity} from 'react-native' 
export default class Login extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View> 
                    <Text>Tìm kiếm và xem youtube trên android box bằng smartphone</Text>
                    <Text>Để đăng nhập,  Bạn hay quét mã QR code</Text>
                </View>
                <TouchableOpacity onPress= {()=> this.props.navigation.navigate('TabNavigationScreen')}>
                    <Text>Quét mã</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})