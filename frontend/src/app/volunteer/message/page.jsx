'use client'

import React, { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  TextField, 
  Button, 
  Paper 
} from '@mui/material'

export default function MessagePage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', content: 'Hey, how are you?', timestamp: '10:00 AM' },
    { id: 2, sender: 'Bob', content: 'I\'m good, thanks! How about you?', timestamp: '10:05 AM' },
    { id: 3, sender: 'Alice', content: 'Doing well, just working on some projects.', timestamp: '10:10 AM' },
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" className="font-bold">
            Message Page
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* Message container with scrollbar */}
      <div className="flex-grow overflow-auto p-4" style={{ maxHeight: 'calc(100vh - 64px - 80px)', overflowY: 'auto' }}>
        <List>
          {messages.map((message) => (
            <ListItem key={message.id} className="mb-2">
              <ListItemAvatar>
                <Avatar className="bg-blue-400">
                  {message.sender[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={message.sender}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" className="block">
                      {message.content}
                    </Typography>
                    <Typography component="span" variant="caption" className="text-gray-500">
                      {message.timestamp}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
      
      {/* Message input and send button */}
      <Paper elevation={3} className="p-4">
        <div className="flex space-x-2">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  )
}
