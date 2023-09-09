import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { Pet } from '../../interfaces';

type Props = {
    key: number,
    pet: Pet
};

const Card: React.FC<Props> = ({ key, pet }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.browseName}>{pet.petName}</Text>
        <View style={styles.imageContainer}>
            <Image
                style={styles.browseImg}
                source={{uri: pet.mainImage}}
            />
        </View>
        <Text>{pet.petSpecie}: {pet.petBreed}</Text>
    </View>
  );
}

export default Card

const styles = StyleSheet.create({
    browseName: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    browseImg: {
        width: 100,
        height: 100,
    },
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'grey',
        shadowOffset: {width: 50, height: 50},
        display: 'flex',
        height: 150,
        justifyContent: 'center',
        margin: 5,
        width: 150,
    },
    imageContainer: {
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
    },
})