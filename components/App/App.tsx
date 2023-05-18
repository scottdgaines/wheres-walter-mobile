import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Browse from '../Browse/Browse'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fetchData from '../../apiCalls'


const Stack = createNativeStackNavigator();

const App = () => {
  const [allPets, setAllPets] = useState([])

  const loadData = () => {
    fetchData()
  }

  useEffect (() => {
    loadData()
  }, [])

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen 
    //       name="Home"
    //       component={Browse}
    //     />
        <View>
          <Text>Hello</Text>
          <Browse 
            lostNotices={true}
          />
          <Browse />
        </View>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
