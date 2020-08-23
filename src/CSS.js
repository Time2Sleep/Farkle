import { StyleSheet } from 'react-native';
import {h, w} from './Dimensions'

export default StyleSheet.create({
        img:{
                width: w/2.4,
                height: w*0.63,
                borderRadius: 10
        },
        headerText:{
                color: '#fff',
                fontSize: 32,
                fontWeight: 'bold'
        },
        header:{
                backgroundColor: '#30d0fe',
                height: 116,
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: 22,
                paddingTop: 71,
                shadowColor:'#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.2,
                elevation: 3,
                position: 'relative'
        },
        ImageCard:{
                paddingTop: 10,
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'center',
                textAlign: 'center',
                width: w/2.4
        },
        container:{
                width: w/2.4,
                paddingVertical: 10
        },
        main:{
                marginTop: 30,
                flexDirection: 'row',
                flexWrap: 'wrap',
                flexShrink: 2,
                justifyContent: 'space-around',
                marginBottom: 150
        }
});