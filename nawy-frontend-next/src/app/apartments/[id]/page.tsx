'use client'

import { FC, useEffect, useState } from 'react';
import styles from '../style.module.css';
import Link from 'next/link';

const page: FC<apartmentProps> = ({params}) => {

  const [apartment, setApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3000/api/v1/apartments/${params.id}`);
      const result = await res.json();
      setApartment(result);
    }

    fetchData();
  }, []);

  if (!apartment) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.single} >
        <div className={styles.card}>
          <h2>{apartment.name}</h2>
          <p>Number of rooms: {apartment.number_of_rooms}</p>
          <p>Floor number: {apartment.floor_number}</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/apartments">
          <button type="submit" className={styles.button}>
            Show all apartments
          </button>
        </Link>
      </div>
    </>
  );
}

export default page;
