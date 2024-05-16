import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const ContactDetail = ({route}) => {


const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {contact.name}</Text>
      <Text style={styles.text}>Teléfono: {contact.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    text: {
      fontSize: 18,
      marginVertical: 10,
    },
  });

export default ContactDetail