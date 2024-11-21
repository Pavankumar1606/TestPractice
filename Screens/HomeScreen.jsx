import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wallpaperContainer}>
          <View style={styles.profileImageContainer}>
            <Text style={styles.name}>Welcome 👋 </Text>
          </View>
          <Text style={styles.headerText}>
            Welcome to Techupdate Notifier, a place where you get all Technology Updates
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        {/* Technologies Section */}
        <View style={styles.TechnolySection}>
          <View style={styles.TechnologySectionHeading}>
            <Text style={styles.headingText}>Technologies</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    paddingHorizontal:20,
    backgroundColor: '#16423C',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    margin:10,
    zIndex: 2, // Ensure the header is above the body
  },
  wallpaperContainer: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    padding: 20,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
  },
  body: {
    backgroundColor: '#fff',
    marginTop: -30, // Pull the body up to overlay the header
    borderTopRightRadius: 0, // No top radius for the body
    borderTopLeftRadius: 0,  // No top radius for the body
    zIndex: 1, // Ensure the body is beneath the header
    paddingHorizontal: 20,
    paddingTop: 40, // Adjust padding to avoid overlap with header content
  },
  TechnolySection: {
    marginTop: 20,
  },
  TechnologySectionHeading: {
    marginBottom: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
