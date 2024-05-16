import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

const navigate = useNavigation();

function goContacts() {
    navigate.navigate("Contacts")
}

  return (
    <View style={styles.page}>
      <Image style={styles.image} source={require('./images/CEUTEC-logo-01.png')}></Image>
      <TouchableOpacity style={styles.touchable} onPress={goContacts}>
         <Text>Contactos de Universidad</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    image: {
        alignSelf: 'center',
        marginTop: 60,
        padding: 15
    },

    touchable: {
        backgroundColor: 'cyan',
        borderRadius: 5,
        alignSelf: 'center',
        padding: 15, 
        marginTop: 15
    },
    page: {
        justifyContent: 'center'
    }
})

export default Home