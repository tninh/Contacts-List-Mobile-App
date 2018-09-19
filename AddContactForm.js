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
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone)
        {
            this.validateForm()
        }
    }

    validateForm = () => {
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3){
            this.setState({isFormValid: true})
        } else{
            this.setState({isFormValid: false})
        }
    }

    handleNameChange = name => {
        this.setState({name})
    }

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
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
            </View>
        );
    }
}