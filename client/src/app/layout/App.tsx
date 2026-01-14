/** @format */
import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { useState } from 'react'
import Navbar from './Navbar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { useActivities } from '../../lib/hooks/useActivities'

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const { activities, isPending } = useActivities()

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((a) => a.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }

  const handleFormClose = () => {
    setEditMode(false)
  }

  const handleSubmitForm = (activity: Activity) => {
    // if (activity.id) {
    //   setActivities(activities.map((a) => (a.id === activity.id ? activity : a)))
    // } else {
    //   const newActivity = { ...activity, id: crypto.randomUUID() }
    //   setSelectedActivity(newActivity)
    //   setActivities([...activities, newActivity])
    // }
    console.log(activity)
    setEditMode(false)
  }

  const handleDelete = (id: string) => {
    // setActivities(activities.filter((a) => a.id !== id))
    console.log(id)
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading activities...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            selectedActivity={selectedActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
            submitForm={handleSubmitForm}
            deleteActivity={handleDelete}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
