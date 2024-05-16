import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

interface contact  {
  name: string,
  phone: string
}

const Contacts = () => {

  const navigate = useNavigation();

  const [contacts, setContacts] = useState<contact[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

const addContact = (name: string, phone:string) => {
setContacts([...contacts, {name, phone}])
}

  const handleContacts = ()=> {
    addContact(name, phone)
  setName('')
  setPhone('')
  }

  return (
    <View>
       <TextInput placeholder='Nombre del contacto'
      value={name}
      onChangeText={setName}
      style={styles.input}>
      </TextInput>

      <TextInput placeholder='Numero de contacto'
      value={phone}
      onChangeText={setPhone}
      style={styles.input}>
      </TextInput>

      <Button title='Agregar' onPress={handleContacts}></Button>

      <Text style={styles.contactsHeader}>Contacts:</Text>
      {
        contacts.map((contact, i) => (
          <TouchableOpacity key={i} style={styles.contactButton} onPress={() => navigate.navigate('ContactDetail', { contact })}>
            <Text style={styles.contactButtonText}>{contact.name} {contact.phone}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  contactsHeader: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  contactButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Contacts