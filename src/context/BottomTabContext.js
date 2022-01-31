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
    },
    {
      activeIcon: 'chatbox',
      inactiveIcon: 'chatbox-outline',
      routeName: 'Chat',
      component: Chat,
    },
    {
      activeIcon: 'call',
      inactiveIcon: 'call-outline',
      routeName: 'Contacts',
      component: Contacts,
    },
    {
      activeIcon: 'time',
      inactiveIcon: 'time-outline',
      routeName: 'History',
      component: History,
    },
  ]);

  const [inActiveBottomTab, setInActiveBottomTab] = useState([
    {
      activeIcon: 'musical-notes',
      inactiveIcon: 'musical-notes-outline',
      routeName: 'Music',
      component: Notes,
    },
    {
      activeIcon: 'chatbubbles',
      inactiveIcon: 'chatbubbles-outline',
      routeName: 'Groups',
      component: Group,
    },
    {
      activeIcon: 'person',
      inactiveIcon: 'person-outline',
      routeName: 'Profile',
      component: Profile,
    },
  ]);

  return (
    <Context.Provider
      value={{
        activeBottomTab,
        setActiveBottomTab,
        inActiveBottomTab,
        setInActiveBottomTab,
      }}>
      {children}
    </Context.Provider>
  );
};

export default BottomTabContext;
