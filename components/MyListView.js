import React, {  useState } from 'react';
import {FlatList, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import MyModal from './MyModal';

const MyListView = ({data}) => {

 
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRow, setSelectedRow] = useState({});

    const actionOnRow = (item) =>{
       
        setModalVisible(true)
        setSelectedRow(item)
    }

    const dismissModal = () =>{
        setModalVisible(false)
    }

return <View>
    <FlatList
    data={data}
    testID="list"
    keyExtractor={(item, index) => {
      return index.toString();
    }}
    renderItem={({ item,index }) => {
    
      return (
        <TouchableWithoutFeedback testID={index.toString()} onPress={ () => actionOnRow(item)}>
        <View  style={styles.itemContainer}>

          <Image
          style={{width: 50, height: 50}}
          source={{uri: item.thumbnailUrl}}
          />
           <View  style={styles.itemRowContainer}>
          <Text style={{ flex: 1, fontSize: 12  }}> {item.id}</Text>
          <Text style={{ flex: 1,  fontSize: 16 }}> {item.title}</Text>
          </View>
        </View>
        </TouchableWithoutFeedback>

        
       
      )
    }}
  />
   <MyModal modalVisible={modalVisible} selectedRow={selectedRow} dismissModal={dismissModal}></MyModal>
  </View>
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContainer: {
      flex: 1,
      paddingTop: 40,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    itemRowContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      paddingLeft: 20
    },
  
    
  });

  export default MyListView;