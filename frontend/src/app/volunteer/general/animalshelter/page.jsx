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
  Chip,
  Button
} from '@mui/material';

const eventDetails = {
  id: 5,
  title: "Animal Shelter Assistant",
  description: "Help care for animals at the local shelter",
  detailedDescription: "Join us at Paws and Claws Animal Shelter for a rewarding day of animal care. You'll assist with feeding, grooming, and socializing our furry friends. This is a great opportunity for animal lovers to make a real difference in the lives of shelter animals. No prior experience is necessary, but a love for animals is a must!",
  requiredSkills: ["Animal Care", "Cleaning"],
  date: "2023-08-12",
  time: "9:00 AM - 3:00 PM",
  location: "Paws and Claws Animal Shelter",
  address: "123 Pet Street, Anytown, USA",
  image: "/images/ASA.png",
  volunteersJoined: 15,
  maxVolunteers: 24,
  whatToBring: ["Comfortable clothes", "Closed-toe shoes", "Water bottle", "Positive attitude"],
};

export default function AnimalShelterAssistant() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" className="font-bold">
            {eventDetails.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="py-8">
        <Card>
          <CardMedia
            component="img"
            sx={{
              width: "50%",
              height: "200px",
              margin: "0 auto",
              objectFit: "cover",
            }}
            image={eventDetails.image}
            alt={eventDetails.title}
          />
          <CardContent>
            <Typography variant="h4" className="mb-4">
              {eventDetails.title}
            </Typography>
            <Typography variant="body1" className="mb-4">
              {eventDetails.detailedDescription}
            </Typography>
            <div className="mb-4">
              <Typography variant="h6" className="mb-2">Required Skills:</Typography>
              {eventDetails.requiredSkills.map((skill) => (
                <Chip key={skill} label={skill} className="mr-2 mb-2" color="primary" />
              ))}
            </div>
            <Typography variant="body1" className="mb-2">
              <strong>Date:</strong> {eventDetails.date}
            </Typography>
            <Typography variant="body1" className="mb-2">
              <strong>Time:</strong> {eventDetails.time}
            </Typography>
            <Typography variant="body1" className="mb-2">
              <strong>Location:</strong> {eventDetails.location}
            </Typography>
            <Typography variant="body1" className="mb-2">
              <strong>Address:</strong> {eventDetails.address}
            </Typography>
            <Typography variant="body1" className="mb-4">
              <strong>Volunteers:</strong> {eventDetails.volunteersJoined}/{eventDetails.maxVolunteers}
            </Typography>
            <Typography variant="h6" className="mb-2">What to Bring:</Typography>
            <ul className="list-disc list-inside mb-4">
              {eventDetails.whatToBring.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Button
              variant="contained"
              fullWidth
              className="mt-4 bg-blue-600 hover:bg-blue-700"
              onClick={() => console.log('Join Event clicked')}
            >
              Join Event
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

