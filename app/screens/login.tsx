import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import useAuthViewModel from '../../src/viewmodel/auth/useAuthViewModel';

export default function Login() {
  const {login, loading, error} = useAuthViewModel();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Email/Username</Text>
        <TextInput
          placeholder="Email/Username"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}> Password </Text>
        <View style={{position: 'relative'}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '3%',
              top: '30%',
            }}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color={'#a8a3a3'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => login(email, password)}
        disabled={loading}>
        <Text style={styles.loginBtnText}>
          {loading ? 'Loading...' : 'Login'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password ?</Text>
      </TouchableOpacity>

      {/* ACTION BUTTONS */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.smallBtn}>
          <Ionicons name={'add-circle-outline'} size={30} color={'#a8a3a3'} />
          <Text>Create New Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallBtn}>
          <View style={styles.circle}>
            <Ionicons name={'apps-outline'} size={15} color={'#a8a3a3'} />
          </View>
          <Text>Login With Mobile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginTop: '2%',
    marginBottom: '5%',
    borderRadius: 8,
  },
  loginBtn: {
    backgroundColor: '#E91E63',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgot: {
    textAlign: 'center',
    marginTop: '10%',
    color: '#999',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  smallBtn: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#a8a3a3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
