import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/PictureScreen';

const Stack = createStackNavigator();
let test = 'text';
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} test={test} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
