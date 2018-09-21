import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, {compareNames} from './contacts'
// import AddContactForm from './AddContactForm'
import {createSwitchNavigator} from 'react-navigation'
import AddContactScreen from './screens/AddContactScreen'
import ContactListScreen from './screens/ContactListScreen'


const AppNavigator = createSwitchNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen
}, {
  initialRouteName: ContactList
})

export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts: contacts,
  }

  // toggleContacts = () => {
  //   this.setState(prevState => ({showContacts: !prevState.showContacts}))
  // }

  // sort = () => {
  //   this.setState(prevState => ({contacts: prevState.contacts.sort(compareNames)}))
  // }

  // showForm = () => {
  //   this.setState({showForm: true})
  // }

  render() {
    return(
      <AppNavigator />
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
