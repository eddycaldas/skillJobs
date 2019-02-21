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
                    onItemPressed={() => props.onItemDeleted(info.item.key)}/>
                )}
            />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
})

export default placeList;