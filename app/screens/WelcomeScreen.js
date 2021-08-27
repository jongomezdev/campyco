import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.brand}>Campy.Co</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  brand: {
    color: '#fff',
    fontSize: 30,
  },
  loginBtn: {
    width: '100%',
    height: 40,
    backgroundColor: '#fc5c65',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerBtn: {
    width: '100%',
    height: 40,
    backgroundColor: '#4ecdc4',
  },
});
