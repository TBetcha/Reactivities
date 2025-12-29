/** @format */
import { Typography, List, ListItem, ListItemText } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import './lib/types/index.d.ts'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios
      .get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivities(response.data))
    return () => {}
  }, [])

  return (
    <>
      <Typography variant='h3'>Reactivities</Typography>
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
