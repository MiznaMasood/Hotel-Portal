import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import AuthRoutes from './Routes/AuthRoutes';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import BookingManagement from './Screens/Booking/BookingManagement';
import CustomerBooking from './Screens/Booking/CustomerBooking';
import Rooms from './Screens/Rooms/Rooms';
import CustomerDetailList from './Screens/Booking/CustomerDetail';
import PaymentForm from './Screens/Payment/Payment';
import CustomerBookingDetail from './Screens/Admin/CustomerBookingDetails';
import CustomerPaymentDetails from './Screens/Admin/PaymentDetails';
import Staff from './Screens/Staff/Staff';
import StaffList from './Screens/Staff/StaffList';
import ServiceRequests from './Screens/Staff/ServiceRequest';

const App = () => {
  const [bookedRooms, setBookedRooms] = useState([]);

  const addBookedRoom = (roomId, bookingDetails) => {
    setBookedRooms([...bookedRooms, { roomId, bookingDetails }]);
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/bookingManagement" element={<BookingManagement />} />
        <Route path="/rooms" element={<Rooms addBookedRoom={addBookedRoom} />}>
          <Route path=":roomId" element={<CustomerBooking bookedRooms={bookedRooms} />} />
        </Route>
        <Route path="/customerDetail/:id" element={<CustomerDetailList />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
        <Route path="/customerBookingDetails" element={<CustomerBookingDetail />} />
        <Route path="/customerPaymentDetails" element={<CustomerPaymentDetails />} />
        <Route path="/customerBooking/:roomId" element={<CustomerBooking />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staffList" element={<StaffList />} />
        <Route path="/serviceRequest" element={<ServiceRequests />} />


      </Route>
    </Routes>
  );
};

export default App;



