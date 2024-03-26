import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ScrollView } from 'react-native';

// Hooks
import { useNavigation } from '@react-navigation/native';

// Style
import styles from "./apartments.style";

const validationSchema = Yup.object({
  name: Yup.string().required('This Apartment Name is required'),
  number_of_rooms: Yup.number().required('This Number of rooms is required'),
  floor_number: Yup.number().required('This Floor number is required'),
});

const AddNewApartment = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.formTitle}>Add new apartment</Text>

      <Formik
        initialValues={{ name: '', number_of_rooms: null, floor_number: null }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            axios.post('http://localhost:3000/api/v1/apartments', values)
              .then(() => {
                console.log('Added successfully!');
                navigation.navigate('Apartments', { success: true });
              })
              .catch((error) => {
                console.error('failed:', error.message);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }, 1000);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Apartment: 1042"
              placeholderTextColor="#888"
              style={styles.input}
            />
            {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              onChangeText={handleChange('number_of_rooms')}
              onBlur={handleBlur('number_of_rooms')}
              value={values.number_of_rooms?.toString()}
              placeholder="Number of rooms"
              keyboardType="numeric"
              placeholderTextColor="#888"
              style={styles.input}
            />
            {errors.number_of_rooms && touched.number_of_rooms && <Text style={styles.error}>{errors.number_of_rooms}</Text>}

            <TextInput
              onChangeText={handleChange('floor_number')}
              onBlur={handleBlur('floor_number')}
              value={values.floor_number?.toString()}
              placeholder="Floor number"
              keyboardType="numeric"
              placeholderTextColor="#888"
              style={styles.input}
            />
            {errors.floor_number && touched.floor_number && <Text style={styles.error}>{errors.floor_number}</Text>}

            <Button onPress={handleSubmit} title="Add new apartment" />
          </View>
        )}
      </Formik>
    </ScrollView>

  );
};

export default AddNewApartment;
