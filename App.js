import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    workersValues: []
  }

  workerAddedHandler = (workerName, workerNumber, workerSkills, workerZipCode) => {
 
    this.setState(prevState => {
      return {
        workersValues: prevState.workersValues.concat({
          key: Math.random(),
          name:
          'Name: ' + workerName + ', ' +
          'Phone Number: ' + workerNumber + ', ' + 
          'Skills: ' + workerSkills + ', ' +
          'Zip Code: ' + workerZipCode,
          image: {
            uri: 'http://eddycaldaswebsite.surge.sh/images/pic00.jpg'
          }
         })
      }
    })
  }

  workerDeletedHandler = (key) => {
    this.setState(prevState =>{
      return {
        workersValues: prevState.workersValues.filter(value => {
          return value.key !== key;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onWorkerAdded={this.workerAddedHandler}/>
        <PlaceList 
          workersValues={this.state.workersValues}
          onItemDeleted={this.workerDeletedHandler}
        />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     paddingTop: 26,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'flex-start'
  }
})