import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';
import BottomTabContext from './src/context/BottomTabContext';

export default App = () => {
  return (
    <BottomTabContext>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </BottomTabContext>
  );
};
