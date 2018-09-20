import React from 'react'
// import Example from './examples/0-Switch';
// export default Example;

import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, {compareNames} from './contacts'

import Row from './Row'

import ContactsList from './ContactsList'



export default class App extends React.Component {

    state = {
      showContacts: false,
      showForm: false,
      contacts: contacts
    }

  addContact = newContact => {
    this.setState(prevState => ({showForm: false, contacts: [...prevState.contacts, newContact]}))
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

// item: {nam: String, phone: String, key: Number}
  // showForm = () => {
  //   this.setState({showForm: true})
  // }

  render() {
    if (this.state.showForm) return

    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        <Button title="sort" onPress={this.sort} />
          {this.state.showContacts && <ContactsList contacts={this.state.contacts} />

        }
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
