import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Modal,  TouchableOpacity } from 'react-native';

const MyModal = ({modalVisible, selectedRow, dismissModal}) => {


   
   
  return  <View style={styles.centeredView}>
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      
        dismissModal();
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
       
      <Image
       
        source={{uri: selectedRow.url}}
        style={{width: 300, height: 400, marginBottom: 20}}
        />
        <TouchableOpacity style={styles.closeButton} onPress={dismissModal}>
            <Text style={{color: "white"}}>Close</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  </Modal>
</View>
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      
      },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    closeButton: {
       height: 50,width: 100, marginTop: 10, backgroundColor: "#696969",  justifyContent: "center",
        alignItems: "center", 
    }
   
  });

  export default MyModal;