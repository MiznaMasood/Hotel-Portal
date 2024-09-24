import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Button,
  Stack,
  Box,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../Config/firebase';

const CustomerPaymentDetails = () => {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'payments'));
        const paymentData = [];
        querySnapshot.forEach((doc) => {
          paymentData.push({ id: doc.id, ...doc.data() });
        });
        setPayments(paymentData);
      } catch (error) {
        console.error('Error fetching payments: ', error);
      }
    };

    fetchPayments();
  }, []);

  const handleDeletePayment = async (paymentId) => {
    try {
      await deleteDoc(doc(database, 'payments', paymentId));
      // Update state to remove deleted payment
      setPayments((prevPayments) => prevPayments.filter((payment) => payment.id !== paymentId));
      console.log('Payment deleted successfully');
    } catch (error) {
      console.error('Error deleting payment: ', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5, backgroundColor: '#f0f4f8' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }}
      >
            Customer Payment Details
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Card Holder Name</TableCell>
              <TableCell>Card Number</TableCell>
              <TableCell>Expiration Date</TableCell>
              <TableCell>CVV</TableCell>
              <TableCell>Billing Address</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments
              .filter((payment) =>
                payment.cardholderName.toLowerCase().includes(search.toLowerCase())
              )
              .map((payment) => (
                <TableRow key={payment.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.cardholderName}</TableCell>
                  <TableCell>{payment.cardNumber}</TableCell>
                  <TableCell>{payment.expirationDate}</TableCell>
                  <TableCell>{payment.cvv}</TableCell>
                  <TableCell>{payment.billingAddress}</TableCell>
                  <TableCell>{payment.paymentMethod}</TableCell>
                  <TableCell>{payment.transactionId}</TableCell>
                  <TableCell>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeletePayment(payment.id)}
                      sx={{ color: 'red' }}
                    >
                      <Delete fontSize="medium" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerPaymentDetails;