import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text pressed');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handleTextPress}>Hello World!</Text>
      <Button title={'Press on me'} onPress={handleTextPress} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'blue'
  }
});
