
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Hooks
import useFetch from "../../hooks/useFetch";

// Style
import styles from "./apartments.style";

const ApartmentDetails = ({ route }) => {
  const { id } = route.params;
  const { data: apartment } = useFetch(`apartments/${id}`);

  return (
    <View style={styles.grid}>
      <TouchableOpacity
        key={apartment.id}
        style={styles.card}
        onPress={() => navigation.navigate('ApartmentDetails', { id: apartment.id })}
      >
        <Text style={styles.text}>{apartment.name}</Text>
        <Text style={styles.text}>Number of rooms: {apartment.number_of_rooms}</Text>
        <Text style={styles.text}>Floor number: {apartment.floor_number}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ApartmentDetails;
