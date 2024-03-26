import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

// Hooks
import useFetch from "../../hooks/useFetch";

// Style
import styles from "./apartments.style";

const Apartments = ({ route }) => {
  const success = route.params?.success || false;
  const navigation = useNavigation();
  const { data: apartments, refetch } = useFetch("apartments");

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      {success && (
        <View style={styles.card}>
          <Text style={styles.successText}>Apartment added successfully!</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewApartment')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add new apartment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {apartments.map((apartment) => (
          <TouchableOpacity
            key={apartment.id}
            style={styles.card}
            onPress={() => navigation.navigate('ApartmentDetails', { id: apartment.id })}
          >
            <Text style={styles.text}>{apartment.name}</Text>
            <Text style={styles.text}>Number of rooms: {apartment.number_of_rooms}</Text>
            <Text style={styles.text}>Floor number: {apartment.floor_number}</Text>
            <Text style={styles.link}>Show Details</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default Apartments;