import React from 'react';
import {View, StyleSheet} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const workersOutput = props.workersValues.map((value, i) => (
        <ListItem 
            key={i} 
            oneWorkerName={value} 
            onItemPressed={() => props.onItemDeleted(i)}/>
      ))
    return (
        <View style={styles.listContainer}>{workersOutput}</View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default placeList;