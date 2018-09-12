import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, {compareNames} from './contacts'

import Row from './Row'

import ContactsList from './ContactsList'

export default class App extends React.Component {
  
    state = {
      showContacts: false,
      contacts: contacts
    }
  
  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }))
  }

// item: {nam: String, phone: String, key: Number}
  

  render() {
    
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
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
