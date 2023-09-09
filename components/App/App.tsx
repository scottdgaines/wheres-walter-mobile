import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Browse from '../Browse/Browse';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fetchData from '../../apiCalls';
import { Pet } from '../../interfaces';
import { allNotices } from '../../dataset'
 
const Stack = createNativeStackNavigator();

const App = () => {
  // return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={App} />
    //     <View>

  const [allPets, setAllPets] = useState<Pet[]>([]);

  const loadData = () => {
    //until a BE can be built, data will be pulled from an internal data set in place of a fetch request
    setAllPets(allNotices)
    console.log(allPets)
  };

  useEffect (() => {
    loadData()
  }, []);

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
