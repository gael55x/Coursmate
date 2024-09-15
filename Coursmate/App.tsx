import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Background Image or Gradient */}
      <ImageBackground 
        source={{ uri: 'https://path-to-your-background-image.jpg' }} 
        style={styles.background}
      >
        {/* Hero Content */}
        <View style={styles.heroContent}>
          <Text style={styles.title}>Coursmate</Text>
          <Text style={styles.subtitle}>Learn Together, Succeed Together</Text>
          <Text style={styles.description}>
            Connect with the perfect study partners and groups. 
            Using AI, Coursmate customizes your learning experience, 
            making it more effective and enjoyable.
          </Text>
          
          {/* Call to Action Buttons */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderColor: '#fff',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
