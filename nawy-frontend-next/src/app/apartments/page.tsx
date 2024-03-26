'use client'

import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')

  const [apartments, setApartments] = useState<Apartment[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:3000/api/v1/apartments');
      const result = await res.json();
      setApartments(result);
    }

    fetchData();
  }, []);

  if (!apartments) return <div>Loading...</div>;

  return (
    <div className={styles.container} >
      {success && (
        <div className={styles.card} style={{marginTop: '10px', backgroundColor: 'wheat'}}>
          <p style={{ color: 'green' }}>Apartment added successfully!</p>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <Link href="/apartments/new">
          <button type="submit" className={styles.button}>
            Add new apartment
          </button>
        </Link>
      </div>

      <div className={styles.grid} >
        {apartments.map((apartment: Apartment) => (
          <div key={apartment.id} className={styles.card}>
            <h2 >{apartment.name}</h2>
            <p>Number of rooms: {apartment.number_of_rooms}</p>
            <p>Floor number: {apartment.floor_number}</p>
            <Link href={`/apartments/${apartment.id}`} className={styles.link}>
              Show Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
