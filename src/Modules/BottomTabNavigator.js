import {
    View,
    Text,
    Image
} from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import Wishlists from './Wishlists';
import SearchScreen from './SearchScreen';
import Inbox from './Inbox'
import Trips from './Trips';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: 'white',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}
      >   
        <Tab.Screen name="Explore" component={SearchScreen}
          options={{
            title: "Explore",
            headerShown:false,
            tabBarIcon: ({ focused }) => {
              return (
  
                <Image
                  style={{ height: 20, width: 20 }}
                  source=
                  {{ uri: !focused ? 'https://cdn-icons-png.flaticon.com/128/49/49116.png' : 'https://cdn-icons.flaticon.com/png/128/4889/premium/4889297.png?token=exp=1650441777~hmac=e76b7f765cd712451ea15408e6f748fd' }}
                />
              )
            },
            tabBarColor: '#42C2FF'
          }}
        />
        <Tab.Screen
          name="Wishlists"
          component={Wishlists}
          options={{
            title: 'Wishlists',
            headerShown:false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ height: 20, width: 20 }}
                  source=
                  {{ uri: !focused ? 'https://cdn-icons-png.flaticon.com/128/1216/1216575.png' : 'https://cdn-icons-png.flaticon.com/128/1216/1216811.png' }}
                />
              )
            },
            tabBarColor: '#3E8E7E'
          }}
        />
        <Tab.Screen name="Trips" component={Trips}
          options={{
            title: "Trips",
            headerShown:false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ height: 20, width: 20 }}
                  source={{ uri: focused ? 'https://cdn-icons-png.flaticon.com/512/2111/2111320.png' : 'https://cdn-icons-png.flaticon.com/512/2111/2111461.png' }} />
              )
            },
            tabBarColor: '#00AFC1'
          }}
        />
        <Tab.Screen name="Inbox" component={Inbox}
          options={{
            title: 'Inbox',
            headerShown:false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ height: 20, width: 20 }}
                  source=
                  {{ uri: !focused ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk7TBgXtO54fEDYvnpXyEWFr-HXClnC6-yg&usqp=CAU' : 'https://cdn-icons.flaticon.com/png/128/4716/premium/4716482.png?token=exp=1650448636~hmac=4697ac0ec773b02d207db63637f455a1' }}
                />)
            },
            tabBarColor: '#B667F1'
          }} />
        <Tab.Screen name="Login" component={LoginScreen}
          options={{
            title: 'Login',
            headerShown:false,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ height: 20, width: 20 }}
                  source=
                  {{ uri: !focused ? 'https://img.myloview.com/posters/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group-symbol-male-user-symbol-400-223068902.jpg' : 'https://cdn-icons.flaticon.com/png/128/3871/premium/3871011.png?token=exp=1650442859~hmac=f3af8d53441f80dbd055c734c5d3b9e7' }}
                />
              )
            },
            tabBarColor: '#FF5C8D'
          }} />
      </Tab.Navigator>
    )
  }
  export default BottomTabNavigator;