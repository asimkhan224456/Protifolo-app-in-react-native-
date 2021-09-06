import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem,Avatar} from 'react-native-elements'

const AboutScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: { color: 'green' },
            headerTintColor: 'white',
            title:'ABOUT'
             
         })
    }, [navigation])
    return (
      <View>
            <Card>
                <Card.Divider width={1}   color="black" />
         <Card.Title style={{color: 'green' }}>EDUCATION </Card.Title>
         <Card.Divider width={1}   color="black"/>
        <ListItem>
        <Avatar rounded  source={require('../assets/schlor.jpg')} size="medium"/>
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "700" }}>BSSE(SOFTWARE ENGINEERING) FROM RIPPAH INTERNATION UNVERSITY</ListItem.Title>
        </ListItem.Content>
     </ListItem>
     <Card.Divider width={1}   color="black" />
      <Card.Title style={{color: 'green' }}>PROGRAMMING LANGUAGES</Card.Title>
      <Card.Divider  width={1}   color="black"/>
      <ListItem>
          <Avatar rounded  source={require('../assets/js.png')} size="small" />
          <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "700" }}>JAVASCRIPT,HTML & CSS</ListItem.Title>
          </ListItem.Content>
      </ListItem>
      <Card.Divider  width={1}   color="black"/>
      <ListItem>
          <Avatar rounded  source={require('../assets/python.jpg')} size="small" />
          <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "700" }}>PYTHON & DJANGO</ListItem.Title>
          </ListItem.Content>
      </ListItem>
      <Card.Divider width={1}   color="black"/>
      <ListItem>
          <Avatar rounded  source={require('../assets/dart.png')} size="small" />
          <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "700" }}>DART & FLUTTER & REACT NATIVE</ListItem.Title>
          </ListItem.Content>
      </ListItem>
      <Card.Divider width={1}   color="black"/>
            </Card>
            </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
   
})
