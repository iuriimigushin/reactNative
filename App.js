import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text output within function used.');
  const handleButtonPress = () => alert('This is simple Alert just with message.');
  const handleButtonPress2 = () => Alert.alert("Alert title", "Message of complex alert entity.", [
    { text: "Yes", onPres: () => console.log('Complex alert used. Yes button pressed.') },
    { text: "No", onPres: () => console.log('Complex alert used. No button pressed.') }
  ]);
  const handleButtonPress3 = () => Alert.prompt("Password checker", "Enter your password please", text => console.log(text))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>It's funny Text-entity don't render without link to corresponding style.</Text>
      <Text style={styles.text}>SafeAreaView entity doesn't work on Android 6 Xiaomi Mi3W.</Text>

      <Text style={styles.text} onPress={() => console.log('Text output within attribute used.')}>Text output withing attribute.</Text>
      <Text style={styles.text} onPress={handleTextPress}>Text output within function.</Text>
      <Button title={'Print to log within function.'} onPress={handleTextPress} color="green" />
      <Button title={'Simple alert'} onPress={handleButtonPress} color="orange" />
      <Button title={'Alert with options'} onPress={handleButtonPress2} color="red" />
      <Button title={'Check password'} onPress={handleButtonPress3} color="blue" />

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
