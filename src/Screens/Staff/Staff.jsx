import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[12],
  },
  borderRadius: theme.spacing(2),
}));

const Staff = ({ staff, tasks }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          {staff.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {staff.designation}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {staff.department}
        </Typography>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600, mt: 2 }}>
          Task List:
        </Typography>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemText primary={task.name} secondary={task.deadline} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" sx={{ mt: 2, borderRadius: 2 }}>
          View Profile
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default Staff;