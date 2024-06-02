import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllRegValueQuery, useDeleteRegValueMutation } from '../servies/loginServies'; // Corrected import path
import { Grid, Button, CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from '@mui/material';

export default function AdmissionList() {
  const { data, error, isLoading } = useGetAllRegValueQuery();
  const [deleteAdmission] = useDeleteRegValueMutation();

  // Filter the data to only include records with whattype equal to "Admission"
  const filteredData = data ? data.filter(user => user.whattype === "Admission") : [];

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await deleteAdmission(id);
        alert("Record deleted successfully.");
      } catch (err) {
        console.error('Failed to delete the record:', err);
        alert('Failed to delete the record.');
      }
    }
  };

  return (
    <div className="admission-list-container">
      <Typography variant="h4" gutterBottom>Admission List</Typography>
      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">Error: {error.message}</Alert>}
      {filteredData.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.course}</TableCell>
                  <TableCell>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} md={6}>
                        <Button 
                          component={Link} 
                          to={`/edit/${user.id}`} 
                          variant="contained" 
                          color="primary"
                          sx={{ minWidth: '80px' }}
                        >
                          Edit
                        </Button>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Button 
                          onClick={() => handleDelete(user.id)} 
                          variant="contained" 
                          color="secondary" 
                          sx={{ minWidth: '80px' }}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {filteredData.length === 0 && !isLoading && <Typography>No admission records found.</Typography>}
    </div>
  );
}
