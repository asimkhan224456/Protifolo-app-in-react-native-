import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, ListItem,Avatar} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const ContactScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: { color: 'green' },
            headerTintColor: 'white',
            title:'CONTACT ME'
             
         })
    }, [navigation])
    return (
        <View>
            <Card>
            <Card.Divider width={1}   color="black"/>
                <Card.Title style={{color: 'green' }}>MAILLING ADDRESS</Card.Title>
                <Card.Divider width={1}   color="black"/>
        <ListItem>
        <AntDesign name="home" size={25} color="green" />
        <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "700" }}>WARD NO 1 TAKHT BHAI MARDAN(23160)KPK PAKISTAN  </ListItem.Title>
        </ListItem.Content>
        </ListItem>
        <Card.Divider width={1}   color="black"/>
        <Card.Title style={{color: 'green' }}>CONTACT INFROMATION</Card.Title>
        <Card.Divider width={1}   color="black"/>
        <ListItem>
        <Entypo name="old-phone" size={25} color="green" />
        <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "700" }}>+923409198015</ListItem.Title>
        </ListItem.Content>
        </ListItem>
        <Card.Divider width={1}   color="black"/>
   <ListItem>
   <FontAwesome5 name="whatsapp" size={25} color="green" />
   <ListItem.Content>
   <ListItem.Title style={{ fontWeight: "700" }}>+923429155058</ListItem.Title>
   </ListItem.Content>
   </ListItem>
   <Card.Divider width={1}   color="black"/>
   <ListItem>
   <Entypo name="mail" size={25} color="green" />
   <ListItem.Content>
   <ListItem.Title style={{ fontWeight: "700" }}>ak6852005@gmail.com</ListItem.Title>
   </ListItem.Content>
   </ListItem>
   <Card.Divider width={1}   color="black"/>
   <ListItem>
   <Foundation name="web" size={25} color="green" />
   <ListItem.Content>
   <ListItem.Title style={{ fontWeight: "700" }}>http://software-dr.business.site/</ListItem.Title>
   </ListItem.Content>
   </ListItem>
   <Card.Divider width={1}   color="black"/>
            </Card>
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({})
