'use client'

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Snackbar,
} from '@mui/material';

const eventDetails = {
  title: "Park Cleanup Drive",
  date: "2023-07-22",
  location: "Sunset Park",
};

export default function ParkCleanupDrive() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSnackbarOpen(true);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar position="static" sx={{ backgroundColor: "#2196f3" }}>
        <Toolbar className="justify-center">
          <Typography variant="h6" sx={{ color: "#fff" }} className="font-bold text-center">
            Join Event: {eventDetails.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="py-8">
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardContent>
              <Typography variant="h6" className="mb-4">
                Sign Up for {eventDetails.title}
              </Typography>
              <Typography variant="body2" className="mb-4">
                Date: {eventDetails.date} | Location: {eventDetails.location}
              </Typography>
              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#2196f3",
                    color: "#fff",
                    ":hover": { backgroundColor: "#1976d2" },
                  }}
                >
                  Join Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Thank you for signing up! We'll be in touch soon."
      />
    </div>
  );
}
