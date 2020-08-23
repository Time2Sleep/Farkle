import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";


export default StackNavigator(
    {
            Main: {
                    screen: HomeScreen
            },
            Details:{
                    screen: DetailsScreen
            }
    },
    {
            initialRouteName: 'Main'
    }
)