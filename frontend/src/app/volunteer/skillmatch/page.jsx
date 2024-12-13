'use client'

import React, { useState, useEffect } from 'react'
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
    image: "/images/CKV.png", // Updated to CKV.png
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
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
    image: "/placeholder.svg?height=200&width=400",
    volunteersJoined: 6,
    maxVolunteers: 24
  },
  {
    id: 5,
    title: "Animal Shelter Assistant",
    description: "Help care for animals at the local shelter",
    requiredSkills: ["Animal Care", "Cleaning"],
    date: "2023-08-12",
    location: "Paws and Claws Animal Shelter",
    image: "/placeholder.svg?height=200&width=400",
    volunteersJoined: 15,
    maxVolunteers: 24
  }
]

export default function SkillMatchEventPage() {
  const [matchedEvents, setMatchedEvents] = useState([])
  const volunteerSkills = ["Cooking", "Cleaning"] // This could be fetched from a user profile

  useEffect(() => {
    const filteredEvents = events.filter(event =>
      event.requiredSkills.some(skill => volunteerSkills.includes(skill))
    )
    setMatchedEvents(filteredEvents)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" className="font-bold">
            Skill Match Events
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="flex-grow py-8">
        <Typography variant="h4" className="mb-4">
          Events Matching Your Skills
        </Typography>
        <Typography variant="subtitle1" className="mb-4">
          Your skills: {volunteerSkills.join(", ")}
        </Typography>

        <Grid container spacing={3}>
          {matchedEvents.map((event) => (
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
                  <Typography variant="body2" className="mb-2">
                    Date: {event.date}
                  </Typography>
                  <Typography variant="body2" className="mb-2">
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

        {matchedEvents.length === 0 && (
          <Typography variant="h6" className="mt-4 text-center">
            No matching events found. Check back later for more opportunities!
          </Typography>
        )}
      </Container>
    </div>
  )
}
