import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useBottomTabContext} from '../context/BottomTabContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default History = () => {
  // contexts
  const {activeBottomTab, setActiveBottomTab} = useBottomTabContext();

  const onRemove = (item, index) => {
    const tempActiveBottomTabArr = [...activeBottomTab];
    const tabLength = tempActiveBottomTabArr?.filter(
      item => item.isActive == true,
    );

    if (item?.routeName === 'History') return;
    else if (tabLength.length <= 2) {
      Alert.alert('Error', 'Keep atleast 2 items in bottom navigation');
    } else {
      tempActiveBottomTabArr[index].isActive = false;
      // move from index which getting from params
      tempActiveBottomTabArr.splice(index, 1);
      // move to index at tempActiveBottomTabArr?.length of array
      tempActiveBottomTabArr.splice(tempActiveBottomTabArr?.length, 0, item);
      setActiveBottomTab(tempActiveBottomTabArr);
    }
  };

  const onAdd = (item, index) => {
    const tempActiveBottomTabArr = [...activeBottomTab];
    const tabLength = tempActiveBottomTabArr?.filter(
      item => item.isActive == true,
    );
    const historyIndex = tempActiveBottomTabArr.findIndex(
      item => item?.routeName === 'History',
    );

    if (item?.routeName === 'History') return;
    else if (tabLength?.length >= 5) {
      Alert.alert('Error', 'You can add upto 5 items in bottom navigation');
    } else {
      tempActiveBottomTabArr[index].isActive = true;
      // move from index which getting from params
      tempActiveBottomTabArr.splice(index, 1);
      // move to index at historyIndex of array
      tempActiveBottomTabArr.splice(historyIndex, 0, item);
      setActiveBottomTab(tempActiveBottomTabArr);
    }
  };

  return (
    <View style={styles.block}>
      {activeBottomTab?.map?.((item, index) => {
        if (item.isActive === true) {
          return (
            <View
              style={[styles.row, {backgroundColor: '#EFB9B4'}]}
              key={index}>
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
          );
        } else {
          return (
            <View style={[styles.row, {backgroundColor: 'grey'}]} key={index}>
              <View style={styles.simpleRow}>
                <Ionicons name={item?.activeIcon} color="red" size={24} />
                <Text style={styles.text}>{item?.routeName}</Text>
              </View>

              {item?.routeName !== 'History' && (
                <TouchableOpacity onPress={() => onAdd(item, index)}>
                  <Ionicons name="add" color="red" size={22} />
                </TouchableOpacity>
              )}
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
