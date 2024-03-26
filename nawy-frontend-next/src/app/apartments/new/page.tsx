'use client'

import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import styles from './style.module.css';

interface FormValues {
  name: string;
  number_of_rooms: number | null;
  floor_number: number | null;
}

const AddApartmentForm = () => {
  const initialValues: FormValues = {
    name: '',
    number_of_rooms: null,
    floor_number: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('This Apartment Name is required'),
    number_of_rooms: Yup.number().required('This Number of rooms is required'),
    floor_number: Yup.number().required('This Floor number is required'),
  });

  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    setTimeout(() => {
      axios.post('http://localhost:3000/api/v1/apartments', values)
        .then((response) => {
          console.log('Added successfully!');
          if (typeof window !== "undefined") {
            window.location.href = '/apartments?success=true';
          }
        })
        .catch((error) => {
          console.error('failed:', error.message);
        })
        .finally(() => {
          setSubmitting(false);
        });
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className={styles.container}>
        <Form className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>Apartment Name:</label>
            <Field type="name" id="name" name="name" className={styles.input} placeholder="Apartment: 1042"  />
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>

          <div>
            <label htmlFor="number_of_rooms" className={styles.label}>Number of rooms:</label>
            <Field type="number" id="number_of_rooms" name="number_of_rooms"  className={styles.input}/>
            <ErrorMessage name="number_of_rooms" component="div"  className={styles.errorMessage}/>
          </div>
          <div>
            <label htmlFor="floor_number" className={styles.label}>Floor number:</label>
            <Field type="number" id="floor_number" name="floor_number"  className={styles.input}/>
            <ErrorMessage name="floor_number" component="div"  className={styles.errorMessage}/>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>Add new apartment</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default AddApartmentForm;