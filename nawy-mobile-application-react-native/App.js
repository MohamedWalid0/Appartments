import React from 'react';
import { StyleSheet } from 'react-native';
import Apartments from './components/apartments/Apartments';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ApartmentDetails from './components/apartments/ApartmentDetails';
import AddNewApartment from './components/apartments/AddNewApartment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Apartments">
        <Stack.Screen name="Apartments" component={Apartments} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
        <Stack.Screen name="AddNewApartment" component={AddNewApartment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
