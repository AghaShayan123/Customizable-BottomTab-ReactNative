import React, {useState, createContext, useContext} from 'react';
import {Chat, Contacts, Group, History, Home, Notes, Profile} from '../screens';

const Context = createContext();
export const useBottomTabContext = () => useContext(Context);

const BottomTabContext = ({children}) => {
  const [activeBottomTab, setActiveBottomTab] = useState([
    {
      activeIcon: 'home',
      inactiveIcon: 'home-outline',
      routeName: 'Home',
      component: Home,
      isActive: true,
    },
    {
      activeIcon: 'chatbox',
      inactiveIcon: 'chatbox-outline',
      routeName: 'Chat',
      component: Chat,
      isActive: true,
    },
    {
      activeIcon: 'call',
      inactiveIcon: 'call-outline',
      routeName: 'Contacts',
      component: Contacts,
      isActive: true,
    },
    {
      activeIcon: 'time',
      inactiveIcon: 'time-outline',
      routeName: 'History',
      component: History,
      isActive: true,
    },
    {
      activeIcon: 'musical-notes',
      inactiveIcon: 'musical-notes-outline',
      routeName: 'Music',
      component: Notes,
      isActive: false,
    },
    {
      activeIcon: 'chatbubbles',
      inactiveIcon: 'chatbubbles-outline',
      routeName: 'Groups',
      component: Group,
      isActive: false,
    },
    {
      activeIcon: 'person',
      inactiveIcon: 'person-outline',
      routeName: 'Profile',
      component: Profile,
      isActive: false,
    },
  ]);

  return (
    <Context.Provider
      value={{
        activeBottomTab,
        setActiveBottomTab,
      }}>
      {children}
    </Context.Provider>
  );
};

export default BottomTabContext;
