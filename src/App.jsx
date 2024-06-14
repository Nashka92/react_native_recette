import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllCategories from './screen/AllCategories';
import Meals from './screen/Meals';
import AboutTheMeal from './screen/AboutTheMeal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="All Categories">
        <Stack.Screen name="All Categories" component={AllCategories} />
        <Stack.Screen name="MealsOverview" component={Meals} />
        <Stack.Screen name="About the meal" component={AboutTheMeal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
