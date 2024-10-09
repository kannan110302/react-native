import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserManagement from './comp/UserManagement';
import SuccessPage from './comp/SuccessPage';
import { Text } from 'react-native';
import Home from './comp/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Text> hello</Text>
      <Stack.Navigator initialRouteName="Success">
        <Stack.Screen name="UserList" component={UserManagement} />
        <Stack.Screen name="Success" component={SuccessPage} />
        <Stack.Screen name="Login" component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}