import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,  ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
export default function TestingScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Name'); // Default filter
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const filters = ['Name', 'Date', 'Time'];

  const handleSearch = () => {
    // Implement your search functionality here based on searchQuery, selectedFilter, selectedDate, and selectedTime.
    console.log({
      query: searchQuery,
      filter: selectedFilter,
      date: selectedDate,
      time: selectedTime,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Testing Screen</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={`Search by ${selectedFilter.toLowerCase()}...`}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Filters Section */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Filter By:</Text>
        <Picker
          selectedValue={selectedFilter}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedFilter(itemValue)}
        >
          {filters.map((filter) => (
            <Picker.Item key={filter} label={filter} value={filter} />
          ))}
        </Picker>
      </View>

      {/* Date and Time Filters */}
      {selectedFilter === 'Date' && (
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Select Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={selectedDate}
            onChangeText={setSelectedDate}
            placeholderTextColor="#aaa"
          />
        </View>
      )}

      {selectedFilter === 'Time' && (
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Select Time:</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            value={selectedTime}
            onChangeText={setSelectedTime}
            placeholderTextColor="#aaa"
          />
        </View>
      )}

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {/* Results Section */}
      <Text style={styles.resultText}>
        Showing results for "{searchQuery}" filtered by "{selectedFilter}" 
        {selectedDate && ` on ${selectedDate}`}
        {selectedTime && ` at ${selectedTime}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 28,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterSection: {
    marginTop: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
  },
  searchButton: {
    marginTop: 16,
    backgroundColor: '#6200ea',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});
