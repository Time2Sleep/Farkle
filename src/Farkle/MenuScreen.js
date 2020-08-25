import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import GameScreen from "./GameScreen";

function MenuScreen({navigation}) {
        const {container , title, button, buttonsContainer} = styles
        return(
            <View style={container}>
                    <View style={{justifyContent: 'center', flex: 1}}><Text style={title}> Farkle </Text></View>
                    <View style={buttonsContainer}>
                            <View style={button}>
                                    <Button
                                        title="Start Game"
                                        onPress={() => navigation.navigate('Game')}
                                    />
                            </View>
                            <View style={button}>
                                    <Button
                                        title="Options"
                                        onPress={() => console.log('onPress Options')}
                                    />
                            </View>
                            <View style={button}>
                            <Button
                                title="Exit"
                                onPress={() => console.log('onPress Exit')}
                            />
                    </View>

                    </View>
            </View>
        );
}

const Stack = createStackNavigator();

function App() {
        return (
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}} >
                            <Stack.Screen name="Menu" component={MenuScreen}/>
                            <Stack.Screen name="Game" component={GameScreen}/>
                    </Stack.Navigator>
            </NavigationContainer>
        );
}

export default App;

const styles = StyleSheet.create({
        container: {
                flex: 1,
                marginHorizontal: 16,
        },
        title:{
                alignSelf: 'center',
                fontSize: 32,
                fontWeight: 'bold',
        },
        buttonsContainer:{
                flex: 2,
                width: '70%',
                alignSelf: 'center',
        },
        button:{
                paddingBottom: 50,
        }
});
