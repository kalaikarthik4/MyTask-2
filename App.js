/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View,Text  } from 'react-native';
import Axios from 'axios';
import MyListView from './components/MyListView';

const App = () => {
  
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {

    getData()
    .then(res =>  {
      setData(res)
      setLoading(false)
    })
    .catch((error) => console.error(error))
  }, []);


 const getData = (async()=> {
  try {
     let res = await Axios({
          url: 'https://jsonplaceholder.typicode.com/photos',
          method: 'get',
          timeout: 8000,
          headers: {
              'Content-Type': 'application/json',
          }
      })
   
     
      return res.data
  }
  catch (err) {
      console.error(err);
  }
})

  return  <View style={{ flex: 1, padding: 20 }}>
    
  {isLoading ? <ActivityIndicator accessibilityHint='loading'/> : (
  <MyListView data={data}></MyListView>
  )
  }
 
  </View>
};

const styles = StyleSheet.create({
  
});

export default App;
