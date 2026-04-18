import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import useAuthViewModel from '../../src/viewmodel/auth/useAuthViewModel';

export default function Login() {
  const { login, loading, error } = useAuthViewModel();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-orange-100 justify-center px-6">
       {/* CONTENT */}
      <View className="flex justify-center my-6 items-center px-6">
        <Text className="text-2xl font-bold text-center">
          Welcome to Make My Artist
        </Text>
      </View>
      <StatusBar barStyle="dark-content" />

      

      {/* Card Container */}
      <View className="bg-orange-200 rounded-3xl p-6 shadow-lg">

        {/* Title */}
        <Text className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Log in
        </Text>

        <Text className="text-center text-gray-600 mb-6">
          Enter your login details to access your account
        </Text>

        {/* Email Input */}
        <TextInput
          placeholder="Email or Username"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
          className="bg-white rounded-xl px-4 py-3 mb-4"
        />

        {/* Password Input */}
        <View className="bg-white rounded-xl flex-row items-center px-4 mb-2">
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#888"
            className="flex-1 py-3"
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#ff7a00"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text className="text-orange-600 text-sm mb-6">
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Error */}
        {error && (
          <Text className="text-red-500 mb-2 text-center">{error}</Text>
        )}

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => login(email, password)}
          disabled={loading}
          className="bg-orange-500 py-4 rounded-xl items-center"
        >
          <Text className="text-white font-semibold text-lg">
            {loading ? 'Loading...' : 'Log In'}
          </Text>
        </TouchableOpacity>

        {/* Bottom Text */}
        <View className="mt-8 items-center">
          <Text className="text-gray-700">
            Don’t have an account?
          </Text>
          <TouchableOpacity>
            <Text className="text-orange-700 font-semibold mt-1">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}