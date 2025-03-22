import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MovingBoxScreen from './screens/MovingBoxScreen';
import AnimatedFlatListScreen from './screens/AnimatedFlatListScreen';
import ScrollHeaderScreen from './screens/ScrollHeaderScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Lab 3' }} />
        <Stack.Screen name="MovingBox" component={MovingBoxScreen} options={{ title: 'Bài 1: Di chuyển Box' }} />
        <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatListScreen} options={{ title: 'Bài 2: FlatList Animation' }} />
        <Stack.Screen name="ScrollHeader" component={ScrollHeaderScreen} options={{ title: 'Bài 3: Scroll Header' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;