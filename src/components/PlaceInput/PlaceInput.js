import React, {Component} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

class PlaceInput extends Component {
    state = {
        workerName: '',
        workerNumber: '',
        workerSkills: '',
        workerZipCode: ''
        //workersValues: []
      }
    
      handleName = (val) => {
        this.setState({ workerName: val })
      }
    
      handleNumber = (val) => {
        this.setState({ workerNumber: val })
      }
    
      handleSkills = (val) => {
        this.setState({ workerSkills: val })
      }
    
      handleZipCode = (val) => {
        this.setState({ workerZipCode: val })
      }

      submittedHandler = () => {
        if(this.state.workerName.trim() === '') {
          return;
        } 
        else if (this.state.workerNumber.trim() === '') {
          return;
        } else if (this.state.workerSkills.trim() === '') {
          return;
        } else if (this.state.workerZipCode.trim() === '') {
          return;
        }

        this.props.onWorkerAdded(
            this.state.workerName,
            this.state.workerNumber,
            this.state.workerSkills,
            this.state.workerZipCode
            )
      }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter name"
                    underlineColorAndroid = "transparent"      
                    onChangeText={this.handleName}  
                />
                <TextInput style={styles.input}
                    placeholder="Enter phone number"
                    underlineColorAndroid = "transparent"
                    onChangeText={this.handleNumber}  
                />
                <TextInput style={styles.input}
                    placeholder="Enter skills"
                    underlineColorAndroid = "transparent"
                    onChangeText={this.handleSkills}  
                />
                <TextInput style={styles.input}
                    placeholder="Enter Zip Code"
                    underlineColorAndroid = "transparent"
                    onChangeText={this.handleZipCode}  
                />
                <Button
                    onPress={this.submittedHandler}
                    style={styles.button}
                    title="Add"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%'
    },
    input: {
         margin: 10,
         height: 40,
    },
    button: {
    
    }
})

export default PlaceInput;