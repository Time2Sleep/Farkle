import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'

function GameScreen({navigation}) {
        const {container, image, selfScoreContainer, selfScoreText, opponentScoreContainer, opponentScoreText, button, pauseButton} = styles
        return(
                <View style={container}>
                        <ImageBackground source={require('../../assets/BG.jpg')} style={image}>

                                <View  style={{flexDirection: 'row'}}>
                                        <View>
                                                <TouchableOpacity style={button} onPress={() => navigation.navigate('Menu')}>
                                                                <Text style={pauseButton}> | | </Text>
                                                </TouchableOpacity>
                                        </View>
                                        <View style={opponentScoreContainer}>
                                                <Text style={opponentScoreText}>
                                                        ВСЕГО /2000: {"\n"}
                                                        0 {"\n"}
                                                        РАУНД: {"\n"}
                                                        0 {"\n"}
                                                        БРОСОК: {"\n"}
                                                        0 {"\n"}
                                                </Text>
                                        </View>
                                </View>
                                <View style={selfScoreContainer}>
                                        <Text style={selfScoreText}>
                                                ВСЕГО /2000: {"\n"}
                                                0 {"\n"}
                                                РАУНД: {"\n"}
                                                0 {"\n"}
                                                БРОСОК: {"\n"}
                                                0 {"\n"}
                                        </Text>
                                </View>
                        </ImageBackground>
                </View>
        )

}

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        image:{
                flex: 1,
                width: '100%',
                justifyContent: "center"
        },
        selfScoreContainer:{
                flex: 1,
                justifyContent: 'flex-end',
        },
        selfScoreText:{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 10
        },
        opponentScoreContainer:{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                paddingTop: 20
        },
        opponentScoreText:{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                paddingRight: 10,
                textAlign: 'right'
        },
        button:{
                paddingTop: 25,
                paddingLeft: 10,
        },
        pauseButton:{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 32,
        }
});

export default GameScreen