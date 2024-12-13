'use client'

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const eventDetails = {
  title: "Park Cleanup Drive",
  description: "Join us in cleaning up the local park",
  detailedDescription:
    "Be part of the Park Cleanup Drive at Sunset Park. Help us beautify the community and contribute to a cleaner, greener environment. All tools and equipment will be provided.",
  requiredSkills: ["Cleaning", "Gardening"],
  date: "2023-07-22",
  location: "Sunset Park",
  image: "/images/PCD.png",
  volunteersJoined: 12,
  maxVolunteers: 24,
};

export default function ParkCleanup() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <AppBar position="static" sx={{ backgroundColor: "#2196f3" }}> {/* Blue color */}
        <Toolbar>
          <Typography variant="h6" sx={{ color: "#fff" }} className="font-bold">
            Park Cleanup Drive
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="py-8">
        <Card>
          <CardMedia
            component="img"
            image={eventDetails.image}
            alt={eventDetails.title}
            sx={{
              width: "50%", // Make the image half-width
              margin: "0 auto", // Center the image horizontally
              display: "block", // Ensure the image behaves as a block element
            }}
          />
          <CardContent>
            <Typography variant="h5" className="mb-4">
              {eventDetails.title}
            </Typography>
            <Typography variant="body1" className="mb-4">
              {eventDetails.detailedDescription}
            </Typography>
            <Typography variant="body2" className="mb-2">
              <strong>Date:</strong> {eventDetails.date}
            </Typography>
            <Typography variant="body2" className="mb-2">
              <strong>Location:</strong> {eventDetails.location}
            </Typography>
            <Typography variant="body2" className="mb-4">
              <strong>Volunteers:</strong> {eventDetails.volunteersJoined}/{eventDetails.maxVolunteers}
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "50%", // Make the button half-width
                margin: "0 auto", // Center the button
                display: "block", // Ensure it's treated as a block element
                backgroundColor: "#2196f3", // Blue
                color: "#fff", // White text
                ":hover": { backgroundColor: "#1976d2" }, // Darker blue on hover
              }}
            >
              Join Event
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
