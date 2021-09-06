import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, ListItem,Avatar} from 'react-native-elements'




const ServicesScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: { color: 'green' },
            headerTintColor: 'white',
             title:'SERVICES'
         })
    }, [navigation])
    return (
        <View style={{alignItems:'center',justifyContent:'center',marginTop:0,}}>
             <Card>
                 <Card.Divider width={1}   color="black" />
                <Card.Title> <Avatar rounded  source={require('../assets/andriod.jpg')}  size="large"/></Card.Title>
                 <Card.Title> FULL STACK MOBILE APPICATION DEVELOPEMENT </Card.Title>
                 <Card.Divider width={1}   color="black" />
                <Card.Title><Avatar rounded  source={require('../assets/cross.jpg')} size="xlarge"/>
                </Card.Title>
                <Card.Title>CROSS-PLATFORM APPICATION DEVELOPEMENT</Card.Title>
                <Card.Divider  width={1}   color="black"/>
                <Card.Title><Avatar rounded  source={require('../assets/figma.jpg')} size="medium"/>
                </Card.Title>
                <Card.Title>UI & UX DESIGNEING</Card.Title>
                <Card.Divider  width={1}   color="black"/>
             </Card>
        </View>
    )
}

export default ServicesScreen

const styles = StyleSheet.create({})
