import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function SearchAndFilterScreen() {
  const [searchText, setSearchText] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const services = [
    { id: 1, name: 'Plumbing', provider: 'John Doe', location: 'New York', rating: 4.5, available: true },
    { id: 2, name: 'Cleaning', provider: 'Jane Smith', location: 'Los Angeles', rating: 4.7, available: false },
    { id: 3, name: 'Tutoring', provider: 'Alice Brown', location: 'New York', rating: 4.8, available: true },
    { id: 4, name: 'Fitness Training', provider: 'Bob White', location: 'Los Angeles', rating: 4.3, available: true },
  ];

  const filterOptions = {
    location: ['All Locations', 'New York', 'Los Angeles'],
    rating: ['All Ratings', '4.0 and above', '4.5 and above'],
    availability: ['All', 'Available', 'Unavailable'],
  };

  useEffect(() => {
    const filtered = services.filter((service) => {
      const matchesSearch = searchText
        ? service.name.toLowerCase().includes(searchText.toLowerCase()) ||
          service.provider.toLowerCase().includes(searchText.toLowerCase())
        : true;

      const matchesLocation = location ? service.location === location : true;
      const matchesRating = rating ? service.rating >= parseFloat(rating) : true;
      const matchesAvailability = availability
        ? availability === 'true'
          ? service.available
          : !service.available
        : true;

      return matchesSearch && matchesLocation && matchesRating && matchesAvailability;
    });

    setFilteredServices(filtered);
  }, [searchText, location, rating, availability]);

  const resetFilters = () => {
    setLocation('');
    setRating('');
    setAvailability('');
    setSearchText('');
  };

  const applyFilters = () => {
    setFiltersVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search services..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => setFiltersVisible(true)}>
          <FontAwesome name="filter" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Filters Modal */}
      <Modal visible={filtersVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filters</Text>

            {/* Location Filter */}
            <Text style={styles.filterLabel}>Location</Text>
            {filterOptions.location.map((loc, index) => (
              <TouchableOpacity key={index} onPress={() => setLocation(loc === 'All Locations' ? '' : loc)}>
                <Text style={[styles.filterOption, location === loc && styles.selectedOption]}>
                  {loc}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Rating Filter */}
            <Text style={styles.filterLabel}>Rating</Text>
            {filterOptions.rating.map((rate, index) => (
              <TouchableOpacity key={index} onPress={() => setRating(rate === 'All Ratings' ? '' : rate.split(' ')[0])}>
                <Text style={[styles.filterOption, rating === rate.split(' ')[0] && styles.selectedOption]}>
                  {rate}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Availability Filter */}
            <Text style={styles.filterLabel}>Availability</Text>
            {filterOptions.availability.map((avail, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setAvailability(avail === 'All' ? '' : avail === 'Available' ? 'true' : 'false')}
              >
                <Text
                  style={[
                    styles.filterOption,
                    availability === (avail === 'Available' ? 'true' : avail === 'Unavailable' ? 'false' : '') &&
                      styles.selectedOption,
                  ]}
                >
                  {avail}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Filtered Results */}
      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Provider: {item.provider}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Available: {item.available ? 'Yes' : 'No'}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No services found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
  filterLabel: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  filterOption: { fontSize: 14, paddingVertical: 5 },
  selectedOption: { fontWeight: 'bold', color: '#16423C' },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  applyButton: {
    padding: 10,
    backgroundColor: '#16423C',
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  item: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  empty: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#999' },
});
