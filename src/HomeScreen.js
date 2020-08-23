import * as React from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from "./Header";
import ImageCard from "./ImageCard";
import styles from './CSS';
import data from './data.json'

function HomeScreen({navigation}) {
        return (
            <View>
                    <Header title={"Hello world"}/>
                    <ScrollView>
                            <View style={styles.main}>
                                    {data.map(item => (
                                        <ImageCard
                                            data={item}
                                            key={item.id}
                                            onPress={() => navigation.navigate('Details')}
                                        />
                                    ))

                                    }
                            </View>
                    </ScrollView>

            </View>
        );
}

function DetailsScreen() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Details Screen</Text>
            </View>
        );
}

const Stack = createStackNavigator();

function App() {
        return (
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={HomeScreen}/>
                            <Stack.Screen name="Details" component={DetailsScreen}/>
                    </Stack.Navigator>
            </NavigationContainer>
        );
}

export default App;
