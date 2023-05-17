import React from 'react'
import {ScrollView, Text} from 'react-native'

type Props = {
    lostNotices?: boolean;
}

const Browse: React.FC<Props> = ({ lostNotices }) => {

    let dynamicWording;

    if (lostNotices) {
        dynamicWording = "these are the lost notices"
    } else {
        dynamicWording = "these are the found notices"
    }

  return (
    <ScrollView>
        <Text>{dynamicWording}</Text>
    </ScrollView>
  )
}

export default Browse
