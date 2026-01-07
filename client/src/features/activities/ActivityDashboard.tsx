import { Grid2, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

type Props = {
    activities : Activity[]
}
export default function ActivityDashboard({activities}: Props) {
  return (
    <Grid2 size={9}>
      <List>
        {activities.map((activity: Activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
        ))}
      </List>
    </Grid2>
  )
}
