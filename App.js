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
    .then(res =>  setData(res))
    .catch((error) => console.error(error))
    .finally(() => 
    {
    setLoading(false)
    console.log("reached")
   
    }

    )
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


  return (
    <View style={{ flex: 1, padding: 20 }}>
    {isLoading ? <ActivityIndicator /> : (
    <MyListView data={data}></MyListView>
    )
    }
   
  </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
