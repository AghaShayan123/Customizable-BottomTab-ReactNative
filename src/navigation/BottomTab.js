import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBottomTabContext} from '../context/BottomTabContext';

const Tab = createBottomTabNavigator();

export default BottomTab = () => {
  // contexts
  const {activeBottomTab} = useBottomTabContext();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'red',
        headerShown: false,

        tabBarIcon: ({color, focused}) => {
          let activeIcon, InactiveIcon;

          activeBottomTab?.map((item, index) => {
            if (route.name === item?.routeName) {
              activeIcon = item?.activeIcon;
              InactiveIcon = item?.inactiveIcon;
            }
          });

          return (
            <Ionicons
              name={focused ? activeIcon : InactiveIcon}
              color={focused ? 'red' : 'grey'}
              size={24}
            />
          );
        },
      })}>
      {activeBottomTab?.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item?.routeName}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};
