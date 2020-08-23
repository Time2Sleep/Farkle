import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
import Header from './Header'
import ImageCard from './ImageCard'
import data from './data.json'
import styles from './CSS';


class HomeScreen extends Component{
        state = {
                title: "GAMES"
        }

        render() {
                 return (
                    <View>
                            <Header title={this.state.title}/>
                            <ScrollView>
                                    <View style={styles.main}>
                                            {data.map(item =>(
                                                <ImageCard
                                                    data={item}
                                                    key={item.id}
                                                    onPress={()=>this.props.navigation.navigate('Main')}
                                                />
                                            ))

                                            }
                                    </View>
                            </ScrollView>

                    </View>
                )
        }


}

export default HomeScreen;
