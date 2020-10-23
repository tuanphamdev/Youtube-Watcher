import React from 'react'
import {Ionicons,MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Search from "./Search";
import Favorite from './Favorite'

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = MaterialIcons
  let iconName;
  if (routeName === 'Search') {
    iconName = `search`;
    // We want to add badges to home tab icon
  } else if (routeName === 'Favorite') {
    iconName = `favorite`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};
const getTitleBar = (navigation) =>{
  const {routeName} = navigation.state;
  TextTitle = Text;
  let title;
  if(routeName ==='Search'){
    title = 'Search Video';
  }else if(routeName === 'Favorite'){
    title = 'Favorite'
  }
 return title
}

const TabNavigation = createAppContainer(createBottomTabNavigator(
  {
    Search: {screen: Search},
    Favorite: {screen: Favorite}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
      // tabBarLabel: () => 
      //  getTitleBar(navigation),
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }
    
  }
))
export default class MainTabNavigation extends React.Component{
  constructor(props){
   super(props);
   this.state = {
     userId: ""
   }
  }
  componentDidMount(){
    this.setState({
      userId: this.props.navigation.getParam('UserId', null)
    })
  }
  render(){
    return(
      <TabNavigation screenProps = {{userId: this.state.userId}}></TabNavigation>
    )
  }
}