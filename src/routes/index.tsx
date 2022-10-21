import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostScreen} from '../screen/postScreen';
import {LoginScreen} from '../screen/loginScreen';
import {RegistationScreen} from '../screen/registrationScreen';
import {PostDetails} from '../screen/PostDetails';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={RegistationScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
