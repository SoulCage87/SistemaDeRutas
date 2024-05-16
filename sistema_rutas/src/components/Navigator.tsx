import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from '../screen/Contacts';
import ContactDetail from '../screen/ContactDetail';
 

const Navigator = () => {

  const tabHome = createNativeStackNavigator();
  const tab = createBottomTabNavigator();

  function myStack() {
    return(
      <tabHome.Navigator>
        <tabHome.Screen name='HomeScreen' component={Home} />
        <tabHome.Screen name='Contacts' component={Contacts} />
        <tabHome.Screen name='ContactDetail' component={ContactDetail} />
      </tabHome.Navigator>
    )
  }
  return (
   <NavigationContainer>
    <tab.Navigator initialRouteName='home'>
     <tab.Screen name='Home' component={Home}></tab.Screen>
     <tab.Screen name='Contacts' component={Contacts} />
     <tabHome.Screen name='ContactDetail' component={ContactDetail} options={{
      headerShown: false
     }}/>
    </tab.Navigator>
   </NavigationContainer>
  )
}

export default Navigator