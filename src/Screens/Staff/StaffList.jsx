import React from 'react';
import { Grid } from '@mui/material/Grid';
import Staff from './Staff';

const staffData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Manager',
    department: 'HR',
  },
  {
    id: 2,
    name: 'Jane Doe',
    designation: 'Team Lead',
    department: 'IT',
  },
  {
    id: 3,
    name: 'Bob Smith',
    designation: 'Software Engineer',
    department: 'IT',
  },
];

const StaffList = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {staffData.map((staff) => (
        <Grid item xs={12} sm={6} md={4} key={staff.id}>
          <Staff staff={staff} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StaffList;