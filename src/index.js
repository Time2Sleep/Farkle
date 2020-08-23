import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createStackNavigator();

 export function MyStack() {
        return (
            <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Notifications" component={DetailsScreen} />
            </Stack.Navigator>
        );
}