import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[12],
  },
  borderRadius: theme.spacing(2),
}));

const ServiceRequests = () => {
  const [requests, setRequests] = React.useState([
    {
      id: 1,
      type: 'Maintenance',
      description: 'Fix leaky faucet',
      status: 'Pending',
    },
    {
      id: 2,
      type: 'Housekeeping',
      description: 'Clean room',
      status: 'Completed',
    },
    {
      id: 3,
      type: 'Technical Support',
      description: 'Fix Wi-Fi issue',
      status: 'In Progress',
    },
  ]);

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Service Requests
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Request Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </StyledCard>
  );
};

export default ServiceRequests;