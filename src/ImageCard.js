import React from 'react'
import {Text, Image, View, TouchableOpacity} from 'react-native'
import styles from "./CSS";

const ImageCard = ({data, onPress}) => {
        const {image, name } = data
        return(
            <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                    <View>
                            <Image style={styles.img} source={{uri:image}}/>
                    </View>
                    <Text style={styles.ImageCard}>{name}</Text>
            </View>
            </TouchableOpacity>
        )
}

export default ImageCard