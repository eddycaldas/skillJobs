import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    workersValues: [],
    selectedWorker: null
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

  workerSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedWorker: prevState.workersValues.find(worker => {
          return worker.key === key
        })
      }
    })
  }

  workerDeletedHandler = () => {
        this.setState(prevState =>{
          return {
             workersValues: prevState.workersValues.filter(value => {
          return value.key !== prevState.selectedWorker.key;
        }),
        selectedWorker: null
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedWorker: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedWorker={this.state.selectedWorker}
          onItemDeleted={this.workerDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onWorkerAdded={this.workerAddedHandler}/>
        <PlaceList 
          workersValues={this.state.workersValues}
          onItemSelected={this.workerSelectedHandler}
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