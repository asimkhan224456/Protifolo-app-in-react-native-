import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from './Screen/AboutScreen';
import ServicesScreen from './Screen/ServicesScreen'
import HomeScreen from './Screen/HomeScreen'
import ContactScreen from './Screen/ContactScreen'



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'About') {
            iconName = focused 
            ? 'md-people-circle' 
            : 'md-people-circle';
          }
          else if (route.name === 'Services') {
            iconName = focused 
            ? 'ios-receipt-sharp' 
            : 'ios-receipt-sharp';
          }
          else if (route.name === 'Contact') {
            iconName = focused 
            ? 'chatbubble-ellipses' 
            : 'chatbubble-ellipses';
          }
        
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle :{
             fontSize:15,
          }
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen  name="Services" component={ServicesScreen}/>
        <Tab.Screen  name="Contact" component={ContactScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}