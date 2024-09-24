import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Card, CardContent, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import { database } from '../../Config/firebase'; 
import { addDoc, collection } from 'firebase/firestore';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(2),
  backgroundColor: '#f3f3f3',
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: '#3f51b5',
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
  },
  marginBottom: theme.spacing(2),
}));

const PaymentForm = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handlePay = async (e) => {
    e.preventDefault();

    if (!cardholderName || !cardNumber || !expirationDate || !cvv || !billingAddress || !paymentMethod || !transactionId) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields.',
      });
      return;
    }

    try {
   
      const docRef = await addDoc(collection(database, "payments"), {
        cardholderName,
        cardNumber,
        expirationDate,
        cvv,
        billingAddress,
        paymentMethod,
        transactionId,
        timestamp: new Date().toISOString() 
      });

      
      Swal.fire({
        icon: 'success',
        title: 'Payment successful!',
      });

      
      setCardholderName('');
      setCardNumber('');
      setExpirationDate('');
      setCVV('');
      setBillingAddress('');
      setPaymentMethod('');
      setTransactionId('');

    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to process payment. Please try again later.',
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Heading variant="h4" align="center">
        Payment Details
      </Heading>

      <StyledCard>
        <CardContent>
          <Grid container spacing={3}>
            {/* Card Holder Name */}
            <Grid item xs={12}>
              <StyledTextField
                label="Card Holder Name"
                variant="outlined"
                fullWidth
                required
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
              />
            </Grid>

            {/* Card Number */}
            <Grid item xs={12}>
              <StyledTextField
                label="Card Number"
                variant="outlined"
                fullWidth
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                inputProps={{ maxLength: 16 }}
              />
            </Grid>

            {/* Expiry Date */}
            <Grid item xs={6}>
              <StyledTextField
                label="Expiry Date (MM/YY)"
                variant="outlined"
                fullWidth
                required
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="MM/YY"
              />
            </Grid>

            {/* CVV */}
            <Grid item xs={6}>
              <StyledTextField
                label="CVV"
                variant="outlined"
                fullWidth
                required
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                inputProps={{ maxLength: 3 }}
              />
            </Grid>

            {/* Billing Address */}
            <Grid item xs={12}>
              <StyledTextField
                label="Billing Address"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                required
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </Grid>

            {/* Payment Method Dropdown */}
            <Grid item xs={12}>
              <StyledTextField
                select
                label="Payment Method"
                variant="outlined"
                fullWidth
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <MenuItem value="paypal">PayPal</MenuItem>
                <MenuItem value="credit">Credit Card</MenuItem>
                <MenuItem value="debit">Debit Card</MenuItem>
                {/* Add more payment methods as needed */}
              </StyledTextField>
            </Grid>

            {/* Transaction ID */}
            <Grid item xs={12}>
              <StyledTextField
                label="Transaction ID"
                variant="outlined"
                fullWidth
                required
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </Grid>

            {/* Pay Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePay}
                sx={{ height: 50, borderRadius: 2 }}
              >
                Pay Now
              </Button>
            </Grid>

          </Grid>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default PaymentForm;







