'use client'

import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Button,
} from '@mui/material'

const events = [
  {
    id: 1,
    title: "Community Kitchen Volunteer",
    description: "Help prepare meals for the homeless",
    requiredSkills: ["Cooking", "Cleaning"],
    date: "2023-07-15",
    location: "Downtown Community Center",
    image: "/images/CKV.png", // Updated path
    volunteersJoined: 4,
    maxVolunteers: 24
  },
  {
    id: 2,
    title: "Park Cleanup Drive",
    description: "Join us in cleaning up the local park",
    requiredSkills: ["Cleaning", "Gardening"],
    date: "2023-07-22",
    location: "Sunset Park",
    image: "/images/PCD.png",
    volunteersJoined: 12,
    maxVolunteers: 24
  },
  {
    id: 3,
    title: "Senior Home Visit",
    description: "Spend time with elderly residents",
    requiredSkills: ["Communication", "Patience"],
    date: "2023-07-29",
    location: "Evergreen Retirement Home",
    image: "/images/SHV.png",
    volunteersJoined: 8,
    maxVolunteers: 24
  },
  {
    id: 4,
    title: "Children's Reading Hour",
    description: "Read stories to kids at the local library",
    requiredSkills: ["Reading", "Communication"],
    date: "2023-08-05",
    location: "City Public Library",
    image: "/images/CRH.png",
    volunteersJoined: 6,
    maxVolunteers: 24
  },
  {
    id: 5,
    title: "Animal Shelter Assistant",
    description: "Help care for animals at the local shelter",
    requiredSkills: ["Animal Care", "Cleaning"],
    date: "2023-08-12",
    location: "Pawssion Animal Shelter",
    image: "/images/ASA.png",
    volunteersJoined: 15,
    maxVolunteers: 24
  },
  {
    id: 6,
    title: "Tech Workshop for Seniors",
    description: "Teach basic computer skills to senior citizens",
    requiredSkills: ["Teaching", "Patience", "Computer Skills"],
    date: "2023-08-19",
    location: "Community Tech Center",
    image: "/images/TW.png",
    volunteersJoined: 7,
    maxVolunteers: 10
  }
]

export default function AllEventsPage() {
  // In a real application, you would fetch the volunteer's skills from a user profile or database
  const volunteerSkills = ["Cooking", "Cleaning"]

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" className="font-bold">
            All Volunteer Events
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="flex-grow py-8">
        <Typography variant="h4" className="mb-4">
          Available Volunteer Opportunities
        </Typography>
        <Typography variant="subtitle1" className="mb-4">
          Your skills: {volunteerSkills.join(", ")}
        </Typography>

        <Grid container spacing={3}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card className="h-full flex flex-col">
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent className="flex-grow flex flex-col">
                  <Typography variant="h6" className="mb-2">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="mb-2">
                    {event.description}
                  </Typography>
                  <div className="mb-2">
                    {event.requiredSkills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        className="mr-1 mb-1"
                        color={volunteerSkills.includes(skill) ? "primary" : "default"}
                      />
                    ))}
                  </div>
                  <Typography variant="body2" className="mb-1">
                    Date: {event.date}
                  </Typography>
                  <Typography variant="body2" className="mb-1">
                    Location: {event.location}
                  </Typography>
                  <Typography variant="body2" className="mb-2 mt-auto">
                    Volunteers: {event.volunteersJoined}/{event.maxVolunteers}
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth
                    className="mt-2 bg-blue-600 hover:bg-blue-700"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

