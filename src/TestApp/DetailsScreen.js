import React, { PureComponent } from 'react'
import {View, Text, Image, ScrollView} from 'react-native'
import styles from "./CSS";
import {NavigationStackOptions} from "react-navigation-stack";



function DetailsScreen({navigation, route}){
       const {image, name, info} = route.params
       return (
           <ScrollView>
             <View style={styles.detailsContainer}>
                     <View style={{flexDirection: 'row'}}>
                             <Image style={styles.img} source={{uri:image}}/>
                             <View style={{flex: 1, paddingRight: 25, paddingTop: 50}}>
                                     <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', paddingLeft: 25}}>{name}</Text>
                             </View>
                     </View>
                     <Text style={styles.detailsText}>{info}</Text>
             </View>
           </ScrollView>
        )
}

export default DetailsScreen