import React,{useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView } from 'react-native'
import { Card, ListItem} from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

const HomeScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle:{backgroundColor:'white'},
            headerTitleStyle: { color: 'green' },
            headerTintColor: '#F2F2F2',
            title:'ASIM KHAN'
         })
    }, [navigation])
    return (
        <View   style={{alignItems:'center',justifyContent:'center',marginTop:0,}}>
      
            <StatusBar style="auto"/>
            <Card>
            <Card.Divider width={1}   color="black"/>
                <Card.Title style={{color:'green'}}>ASIM KHAN</Card.Title>
                <Card.Divider  width={1}   color="black"/>
                <Card.Title>FULL STACK  SOFTWARE DEVLOPER</Card.Title>
                <Card.Divider width={1}   color="black"/>
               <Card.Title>
              <Avatar rounded source={require('../assets/profile.png')} size="xlarge"/>
                  </Card.Title>
              <Card.Divider  width={1}   color="black"/>
              <Text style={{ fontWeight: "700" }}>I have more than One Year Experineces In Full Stack </Text>
              <Text style={{ fontWeight: "700" }}>Mobile Application Development Using Latest Frame</Text>
              <Text style={{ fontWeight: "700" }}>work (React-Native) And (Flutter).I Can Develope  A</Text>
              <Text style={{ fontWeight: "700" }}>Complete Cross-platform app for Andriod ,IOS, WEB </Text>
              <Text style={{ fontWeight: "700" }}>and Desktop..</Text>
            </Card>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
