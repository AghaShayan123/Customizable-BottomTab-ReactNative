import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useBottomTabContext} from '../context/BottomTabContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default History = () => {
  // contexts
  const {
    activeBottomTab,
    setActiveBottomTab,
    inActiveBottomTab,
    setInActiveBottomTab,
  } = useBottomTabContext();

  const onRemove = (item, index) => {
    const tempActiveBottomTabArr = [...activeBottomTab];
    const tempInactiveBottomTabArr = [...inActiveBottomTab];

    if (item?.routeName === 'History') return;
    else if (tempActiveBottomTabArr?.length <= 2) {
      Alert.alert('Error', 'Keep atleast 2 items in bottom navigation');
    } else {
      tempActiveBottomTabArr?.splice(index, 1);
      tempInactiveBottomTabArr?.splice(
        tempInactiveBottomTabArr?.length,
        0,
        item,
      );

      setInActiveBottomTab(tempInactiveBottomTabArr);
      setActiveBottomTab(tempActiveBottomTabArr);
    }
  };

  const onAdd = (item, index) => {
    const tempActiveBottomTabArr = [...activeBottomTab];
    const tempInactiveBottomTabArr = [...inActiveBottomTab];

    if (tempActiveBottomTabArr?.length >= 5) {
      Alert.alert('Error', 'You can add upto 5 items in bottom navigation');
    } else {
      tempActiveBottomTabArr?.splice(
        tempActiveBottomTabArr?.length - 1,
        0,
        item,
      );
      tempInactiveBottomTabArr?.splice(index, 1);

      setInActiveBottomTab(tempInactiveBottomTabArr);
      setActiveBottomTab(tempActiveBottomTabArr);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.heading}>Active Tabs</Text>
      {activeBottomTab?.map?.((item, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.simpleRow}>
            <Ionicons name={item?.activeIcon} color="red" size={24} />
            <Text style={styles.text}>{item?.routeName}</Text>
          </View>

          {item?.routeName !== 'History' && (
            <TouchableOpacity onPress={() => onRemove(item, index)}>
              <Entypo name="cross" color="red" size={20} />
            </TouchableOpacity>
          )}
        </View>
      ))}

      <Text style={styles.heading}>Inactive Tabs</Text>
      {inActiveBottomTab?.map?.((item, index) => (
        <View style={styles.row} key={index}>
          <View style={styles.simpleRow}>
            <Ionicons name={item?.activeIcon} color="red" size={24} />
            <Text style={styles.text}>{item?.routeName}</Text>
          </View>

          <TouchableOpacity key={index} onPress={() => onAdd(item, index)}>
            <Ionicons name="add" color="red" size={22} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFB9B4',
    padding: 10,
    marginVertical: 10,
  },
  simpleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
});
