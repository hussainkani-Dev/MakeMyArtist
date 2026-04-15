import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const salon_list = [
  {id: '1', name: 'Beauty Face Ladies salon'},
  {id: '2', name: 'Ladies Beauty salon'},
  {id: '3', name: 'Anchor Beauty salon'},
  {id: '4', name: 'J & Y Ladies Beauty salon'},
  {id: '5', name: 'Fubari Beauty SAlon'},
];
const area_list = [
  {id: '1', name: 'Acacia Avenues'},
  {id: '2', name: 'Al Badaa'},
  {id: '3', name: 'Al Barari (Majan)'},
  {id: '4', name: 'Al Barsha'},
  {id: '5', name: 'Al Barsha South'},
];

export default function LocationSearchView() {
  const [areaVal, setAreaVal] = useState('');
  const [salonVal, setSalonVal] = useState('');

  const [showSalonList, setShowSalonList] = useState(false);
  const [showAreaList, setShowAreaList] = useState(false);

  const autoTextInputView = (
    list: any[],
    value: string,
    setValue: (val: string) => void,
    setShowList: (val: boolean) => void,
  ) => {
    const filteredList =
      value.length === 0
        ? list
        : list.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase()),
          );

    return (
      <View style={styles.dropdown}>
        <FlatList
          data={filteredList}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setValue(item.name);
                setShowList(false);
              }}
              style={styles.item}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtnStyle}>
        <Ionicons
          name="chevron-back-sharp"
          size={30}
          onPress={() => {
            router.back();
          }}
        />
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.subBody1}>
          <Ionicons name="search-circle" size={35} color={'#fbbae3'} />
          <View style={styles.lineBody}>
            <View style={styles.lineStyle} />
          </View>
          <Ionicons name="location-sharp" size={35} color={'#fbbae3'} />
        </View>
        <View style={styles.subBody2}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Search for beauty salon, service..."
            placeholderTextColor={'#cbcbcb'}
            value={salonVal}
            onChangeText={val => {
              setSalonVal(val);
              setShowSalonList(true);
              setShowAreaList(false);
            }}
            onFocus={() => {
              setShowSalonList(true);
              setShowAreaList(false);
            }}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Select Area"
            placeholderTextColor={'#cbcbcb'}
            value={areaVal}
            onChangeText={val => {
              setAreaVal(val);
              setShowSalonList(false);
              setShowAreaList(true);
            }}
            onFocus={() => {
              setShowAreaList(true);
              setShowSalonList(false);
            }}
          />
        </View>
      </View>

      {showSalonList &&
        autoTextInputView(salon_list, salonVal, setSalonVal, setShowSalonList)}
      {showAreaList &&
        autoTextInputView(area_list, areaVal, setAreaVal, setShowAreaList)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '2%',
    backgroundColor: '#fff',
  },
  backBtnStyle: {
    padding: 15,
  },
  body: {
    padding: 10,
    flexDirection: 'row',
  },
  subBody1: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subBody2: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineBody: {alignItems: 'center', width: '50%'},
  lineStyle: {
    width: 1,
    height: 30,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: '#fbbae3',
    alignItems: 'center',
  },
  inputStyle: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f3f3f3',
    margin: 5,
    padding: 10,
    color: '#000',
  },

  dropdown: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    marginTop: 5,
    maxHeight: 200,
    width: '75%',
    marginLeft: '18%',
    backgroundColor: '#fff',
  },

  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
});
