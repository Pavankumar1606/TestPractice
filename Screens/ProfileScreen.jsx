import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Modal } from 'react-native';

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  const [editableDetails, setEditableDetails] = useState({ ...userDetails });

  const handleSave = () => {
    setUserDetails(editableDetails);
    setModalVisible(false);
  };

  const handleLogout = () => {
    // Add logout functionality
    console.log('User logged out');
  };

  return (
    <View style={styles.container}>
      {/* Top Section: Profile Picture and Name */}
      <View style={styles.topSection}>
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://via.placeholder.com/100', // Replace with user's profile picture URL
          }}
        />
        <Text style={styles.name}>{userDetails.name}</Text>
      </View>

      {/* Middle Section: User Details */}
      <View style={styles.middleSection}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.detail}>{userDetails.email}</Text>
      </View>

      {/* Bottom Section: Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Editing */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={editableDetails.name}
              onChangeText={(text) => setEditableDetails({ ...editableDetails, name: text })}
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editableDetails.email}
              onChangeText={(text) => setEditableDetails({ ...editableDetails, email: text })}
              placeholderTextColor="#aaa"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#16423C',
    marginRight: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#16423C',
  },
  middleSection: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#16423C',
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  editButton: {
    backgroundColor: '#16423C',
    padding: 12,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#16423C',
    padding: 12,
    borderRadius: 8,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#16423C',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#16423C',
    marginBottom: 20,
    fontSize: 16,
    color: '#16423C',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#16423C',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#aaa',
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
});
