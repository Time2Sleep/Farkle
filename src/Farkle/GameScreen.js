import React, {useState} from 'react'
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const imageImports = {
        0: require("../../assets/dice1.png"),
        1: require("../../assets/dice2.png"),
        2: require("../../assets/dice3.png"),
        3: require("../../assets/dice4.png"),
        4: require("../../assets/dice5.png"),
        5: require("../../assets/dice6.png"),
};

function GameScreen({navigation}) {
        const {container, image, selfScoreContainer, selfScoreText, opponentScoreContainer, opponentScoreText, button, pauseButton, dice} = styles
        let scoreText = "ВСЕГО /2000: \n0 \nРАУНД: \n0 \nБРОСОК: \n0 ";
        var [dices, setDices] = useState([]);

        return (
            <View style={container} onStartShouldSetResponder={() => true}
                  onResponderGrant={(event) => throwDices(event)}>
                    <ImageBackground source={require('../../assets/BG.jpg')} style={image}>

                            <View style={{flexDirection: 'row'}}>
                                    <View>
                                            <TouchableOpacity style={button}
                                                              onPress={() => navigation.navigate('Menu')}>
                                                    <Text style={pauseButton}> | | </Text>
                                            </TouchableOpacity>
                                    </View>
                                    <View style={opponentScoreContainer}>
                                            <Text style={opponentScoreText}>
                                                    {scoreText}
                                            </Text>
                                    </View>
                            </View>
                            <View style={{flex: 1}}>
                                    {dices.map(dice => <Dice key={dice.id} diceInfo={dice}/>)}
                            </View>

                            <View style={selfScoreContainer}>

                                    <Text style={selfScoreText}>
                                            {scoreText}
                                    </Text>
                            </View>
                    </ImageBackground>
            </View>
        );


        function throwDices() {
                let dices = [];
                for (let i = 0; i < 6; i++) {
                        dices[i] = {
                                id: i,
                                value: Math.floor(Math.random() * 6),
                                paddingLeft: Math.random() * 4 * 50 - 100,
                                paddingTop: Math.random() * 6 * 50 - 150,
                        };

                }
                setDices(dices);
        }
}


function Dice({diceInfo}) {
        return (
            <Image source={imageImports[diceInfo.value]}
                   style={[styles.diceImg, {right: diceInfo.paddingLeft, bottom: diceInfo.paddingTop}]}></Image>
        )
}


const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        diceImg: {
                width: 75,
                height: 75,
                alignSelf: 'center',
        },
        image: {
                flex: 1,
                width: '100%',
                justifyContent: "center"
        },
        selfScoreContainer: {
                flex: 1,
                justifyContent: 'flex-end',
        },
        selfScoreText: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                paddingLeft: 10
        },
        opponentScoreContainer: {
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                paddingTop: 20
        },
        opponentScoreText: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                paddingRight: 10,
                textAlign: 'right'
        },
        button: {
                paddingTop: 25,
                paddingLeft: 10,
        },
        pauseButton: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 32,
        },
        touchable: {
                flex: 1,
                justifyContent: 'flex-end',
        },
        dice: {
                flex: 1,
                alignItems: 'center',
                backgroundColor: "red"
        },
        contentText: {
                alignSelf: 'center',
                fontSize: 45,
                color: 'white'
        }
});

export default GameScreen