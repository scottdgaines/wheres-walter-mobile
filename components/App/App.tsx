import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Browse from '../Browse/Browse'


const App = () => {
  return (
   <View>
    <Text>Hello</Text>
    <Browse 
      lostNotices={true}
    />
    <Browse 
    />
   </View>
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
