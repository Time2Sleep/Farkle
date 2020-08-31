import React, {useState, Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'

let text = "TOUCH ME"

function GameScreen({navigation}) {
        const {container, image, selfScoreContainer, selfScoreText, opponentScoreContainer, opponentScoreText, button, pauseButton, touchable} = styles
        let scoreText = "ВСЕГО /2000: \n0 \nРАУНД: \n0 \nБРОСОК: \n0 "
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
                                                        {scoreText}
                                                </Text>
                                        </View>
                                </View>
                                <View style={selfScoreContainer}>
                                        <TouchableOpacity style={touchable} onPress={() => throwDices()}>
                                                <MainContent text={text}/>
                                        <Text style={selfScoreText}>
                                                {scoreText}
                                        </Text>
                                        </TouchableOpacity>
                                </View>
                        </ImageBackground>
                </View>
        )

}

function throwDices(){
        text = "lelel"
}

function MainContent({text}){
        return(
        <View>
                <Text style={styles.contentText}> {text}</Text>
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
        },
        touchable:{
                flex: 1,
                justifyContent: 'flex-end',
        },
        contentText:{
                alignSelf: 'center',
                fontSize: 45,
                color: 'white',
                paddingBottom: 80
        }
});

export default GameScreen