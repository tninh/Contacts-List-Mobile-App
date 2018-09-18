import React from 'react'
import {TextInput, StyleSheet, View, Button} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default class AddContactForm extends React.Component{
    static propTypes={
        addContact: PropTypes.func,
    }

    state ={
        name: '',
        phone: '',
    }

    handleNameChange = name => {
        this.setState({name})
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    handlePhoneChange = phone => {
        if(+phone >= 0)
        {
            this.setState({phone})
        }
    }

    render(){
        return(
            <View style={{padding: 20}}>
                <TextInput
                    style = {styles.input} 
                    onChangeText={this.handleNameChange} 
                    value={this.state.name} 
                    placeholder="Name" />
                <TextInput
                    style={styles.input} 
                    onChangeText={this.handlePhoneChange} 
                    value={this.state.phone} 
                    keyboardType="numeric" 
                    placeholder="Phone" />
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }
}