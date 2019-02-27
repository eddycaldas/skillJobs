import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.workersValues}
            renderItem={(info) => (
                <ListItem 
                    oneWorkerName={info.item.name}
                    workerImage={info.item.image} 
                    onItemPressed={() => props.onItemSelected(info.item.key)}/>
                )}
            />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '90%'
    }
})

export default placeList;