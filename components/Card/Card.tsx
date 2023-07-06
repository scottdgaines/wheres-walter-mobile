import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { CleanedPet } from '../../interfaces'

type Props = {
    key: number;
    pet: CleanedPet
}

const Card: React.FC<Props> = ({ key, pet }) => {
  return (
    <View style={styles.container}>
        <Text>{pet.petName}</Text>
        <Text>{pet.petBreed}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    }
})

export default Card
