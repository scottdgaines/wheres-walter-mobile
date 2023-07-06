import * as React from 'react';
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Browse from '../Browse/Browse';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fetchData from '../../apiCalls';
import { CleanedPet } from '../../interfaces';
 
const Stack = createNativeStackNavigator();

const App = () => {
  // return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={App} />
    //     <View>

  const [allPets, setAllPets] = useState<CleanedPet[]>([])

  const loadData = async () => {
    let data: CleanedPet[] = await fetchData()
    setAllPets(data)
  }

  useEffect (() => {
    loadData()
  }, [])

  return (
  // <NavigationContainer>
  //      <Stack.Navigator>
  //        <Stack.Screen 
  //          name="Home"
  //       component={Browse}
  //        /> 
        <View style={styles.appContainer}>
          <Text>Hello</Text>
          <Browse 
            lostNotices={true}
            pets={allPets}
        />
        </View>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
