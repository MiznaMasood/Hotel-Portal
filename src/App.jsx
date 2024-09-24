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

import StaffList from './Screens/Staff/StaffList';
import StaffAdd from './Screens/Staff/StaffAdd';
import OurServices from './Screens/Sevices/OurServices';

const App = () => {
  const [bookedRooms, setBookedRooms] = useState([]);
  const [staffList, setStaffList] = useState([]); // Define staffList state here

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
        <Route path="/staffAdd" element={<StaffAdd  />} />
        <Route path="/staffList" element={<StaffList />} />
      
        <Route path="/ourServices" element={<OurServices />} />


      </Route>
    </Routes>
  );
};

export default App;