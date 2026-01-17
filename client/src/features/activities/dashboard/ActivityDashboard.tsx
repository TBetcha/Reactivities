/** @format */

import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'
import { useActivities } from '../../../lib/hooks/useActivities'

export default function ActivityDashboard() {
  const { activities, isPending } = useActivities()
  if (!activities || isPending) return <div>Loading activities...</div>

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList />
      </Grid2>
      <Grid2 size={5}>Activity Filters</Grid2>
    </Grid2>
  )
}
