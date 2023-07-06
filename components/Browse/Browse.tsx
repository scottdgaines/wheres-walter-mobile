import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import { CleanedPet } from '../../interfaces';
import Card from '../Card/Card';

type Props = {
    lostNotices?: boolean,
    pets?: CleanedPet[]
};

const Browse: React.FC<Props> = ({ lostNotices, pets }) => {
    let dynamicWording;

    if (lostNotices) {
        dynamicWording = "these are the lost notices";
    } else {
        dynamicWording = "these are the found notices";
    };

    const card = pets ? pets.map((pet: CleanedPet) => {
        return (
            <Card 
                key={pet.noticeID} 
                pet={pet}
            />
        )
    }) : null;


  return (
    <ScrollView>
        <Text>{dynamicWording}</Text>
        <View>{card}</View>
    </ScrollView>
  );
}

export default Browse
