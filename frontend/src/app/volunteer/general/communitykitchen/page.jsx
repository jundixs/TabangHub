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
  title: "Community Kitchen Volunteer",
  description: "Help prepare meals for the homeless",
  detailedDescription:
    "Join us at the Downtown Community Center to prepare and serve meals to the homeless. This is a great opportunity to give back to the community and meet like-minded individuals. We provide all necessary materials and guidance.",
  requiredSkills: ["Cooking", "Cleaning"],
  date: "2023-07-15",
  location: "Downtown Community Center",
  image: "/images/CKV.png",
  volunteersJoined: 4,
  maxVolunteers: 24,
};

export default function CommunityKitchen() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" className="font-bold">
            Community Kitchen Volunteer's
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
                backgroundColor: "blue",
                ":hover": { backgroundColor: "darkblue" },
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
