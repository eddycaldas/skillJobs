import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail = (props) => {
    let modalContent = null;
    if(props.selectedWorker) {
        modalContent = (
            <View>
                <Image 
                    source={props.selectedWorker.image}
                    style={styles.workerImage}
                />
                <Text style={styles.textName}>{props.selectedWorker.name}</Text>
            </View>
        )
    }
    return(
        <Modal 
            onRequestClose={props.onModalClosed}
            visible={props.selectedWorker !== null}
            animationType='slide'
        >
            <View style={styles.modalContainer}>
                {modalContent}
            </View>
            <View>
                <Button title='Delete' color="red" onPress={props.onItemDeleted}/>
                <Button title='Close' onPress={props.onModalClosed}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    workerImage: {
        marginTop: 20,
        width: '100%',
        height: 200
    },
    textName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 15,
        margin: 10
    }
})
    
export default placeDetail;