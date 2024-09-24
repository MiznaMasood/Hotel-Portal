import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { database } from '../../Config/firebase';

const CustomerDetailList = () => {
  const [bookings, setBookings] = useState([]);  
  const [loading, setLoading] = useState(true); 

  const fetchAllBookings = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, 'customerBooking')); 
      const bookingList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
      setBookings(bookingList);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchAllBookings(); 
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>Customer Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <h2>Name: {booking.name}</h2>
              <p>Email: {booking.email }</p>
              <p>Check-In Date: {booking.checkInDate }</p>
              <p>Check-Out Date: {booking.checkOutDate }</p>
              <p>Room Type: {booking.roomType }</p>
              <p>Special Requests: {booking.specialRequests}</p>
              <hr /> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerDetailList;
