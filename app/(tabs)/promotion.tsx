import { Colors } from '@/src/utils/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
export default function Promotion() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.header}>
        <Text style={styles.titleTxt}>Invite Your 6 Friends &</Text>
        <Text style={styles.titleTxt}>You Earned up to 30 AED</Text>
        <Text style={styles.subTxt2}>Get 5 AED for your each referral</Text>
        <View
          style={{
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '50%',
              padding: 20,
              borderRadius: 10,
              backgroundColor: '#9a619f',
            }}>
            <View style={{alignItems: 'center', gap: 10}}>
              <Ionicons name={'cash-sharp'} size={25} color={'yellow'} />
              <Text style={styles.subTxt2}>You Earned</Text>
            </View>
            <View style={{alignItems: 'center', gap: 5, marginTop: '5%'}}>
              <Text style={styles.subTxt1}>0</Text>
              <Text style={styles.subTxt1}>AED</Text>
            </View>
          </View>
          <View style={{marginTop: '15%', width: '100%', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnTxt}>Refer Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.body}>
        <View style={styles.card}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{gap: 10, paddingBottom: 30}}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.subContTxt3}>Terms of ways to Earn</Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
            <Text style={styles.subContTxt4}>
              • Cashback when friend registers
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: '10%',
    flex: 1.3,
    padding: 20,
    backgroundColor: '#6b1d83',
  },
  body: {
    flex: 1,
    marginTop: -40,
  },
  card: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    backgroundColor: Colors.button.primary,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    borderRadius: 8,
  },
  btnTxt: {
    color: '#fff',
    fontWeight: 'bold',
  },
  titleTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
  subTxt1: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  subTxt2: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '200',
  },
  subContTxt3: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  subContTxt4: {
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
  },
});
