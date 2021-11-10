import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Log in</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.inputs} placeholder="Username"/>
        <TextInput style={styles.inputs} placeholder="Password"/>
        
        <Text style={{color: '#0E9EB5',fontSize: '12px'}}
          onPress={() => Linking.openURL('')}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.suggestion}>
        <Text>Don't have account?<Text style={{color: 'red'}}>Sign Up</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 100,
    marginRight: 20,
    marginLeft: 20,
    elevation: 5,
    borderRadius: 10
  },
  header: {
    flex: 2,
    width: '90%',
    backgroundColor: 'azure'
  },
  form: {
    flex: 2,
    width: '90%',
    backgroundColor: 'tomato',
    padding: 30
  },
  button: {
    flex: 2,
    width: '90%',
    backgroundColor: 'violet'
  },
  suggestion: {
    flex: 2,
    width: '90%',
    backgroundColor: 'yellow'
  },
  inputs: {
    fontSize: 15,
    borderBottomWidth: 2,
    margin: 10
  }
});
