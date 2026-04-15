import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Tab1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Upcoming</Text>
    </View>
  );
}

function Tab2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Completed</Text>
    </View>
  );
}
function Tab3() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Canceled</Text>
    </View>
  );
}

export default function MyBooking() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const tabs = ['Upcoming', 'Completed', 'Canceled'];

  function TopTabs() {
    return (
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name={'calendar-outline'} size={20} color={'#e41d89'} />
        <Text style={styles.titleTxt}>My Bookings</Text>
      </View>
      <View style={styles.card}>
        <TopTabs />
      </View>
      <View style={{flex: 1}}>
        {activeTab === 'Upcoming' && <Tab1 />}
        {activeTab === 'Completed' && <Tab2 />}
        {activeTab === 'Canceled' && <Tab3 />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    marginTop: '10%',
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    backgroundColor: '#fff',
  },
  titleTxt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 4,
  },

  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: '#fff',
  },

  tabText: {
    color: '#888',
    fontSize: 14,
  },

  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },
});
