import React from 'react'
import {TextInput, StyleSheet, View, Button, KeyboardAvoidingView} from 'react-native'
import {Constants} from 'expo'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center'
    }
})

export default class AddContactForm extends React.Component{
    static propTypes={
        addContact: PropTypes.func,
    }

    state ={
        name: '',
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone)
        {
            this.validateForm()
        }
    }

    getHandler = key => val => {
        this.setState({[key]: val})
    }

    // handleNameChange = this.getHandler('name') // val => {this.setState({name: val})}
    // handlePhoneChange = this.getHandler('phone')

    validateForm = () => {
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3){
            this.setState({isFormValid: true})
        } else{
            this.setState({isFormValid: false})
        }
    }

    // handleNameChange = name => {
    //     this.setState({name})
    // }

    handlePhoneChange = phone => {
        if(+phone >= 0 && phone.length <= 10)
        {
            this.setState({phone})
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    style = {styles.input} 
                    onChangeText={this.getHandler('name')} 
                    value={this.state.name} 
                    placeholder="Name" />
                <TextInput
                    style={styles.input} 
                    onChangeText={this.handlePhoneChange} 
                    value={this.state.phone} 
                    keyboardType="numeric" 
                    placeholder="Phone" />
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
            </KeyboardAvoidingView>
        );
    }
}