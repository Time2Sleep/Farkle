import * as React from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from "./Header";
import ImageCard from "./ImageCard";
import styles from './CSS';
import data from './data.json'
import DetailsScreen from "./DetailsScreen";

function HomeScreen({navigation}) {
        return (
            <View>
                    <Header title={"GAMES"}/>
                    <ScrollView>
                            <View style={styles.main}>
                                    {data.map(item => (
                                        <ImageCard
                                            data={item}
                                            key={item.id}
                                            onPress={() => navigation.navigate('Details', (item))}
                                        />
                                    ))
                                    }
                            </View>
                    </ScrollView>
            </View>
        );
}

const Stack = createStackNavigator();

function App() {
        return (
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home" >
                            <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
                            <Stack.Screen options={{title: 'Подробная информация'}} name="Details" component={DetailsScreen}/>
                    </Stack.Navigator>
            </NavigationContainer>
        );
}

export default App;
