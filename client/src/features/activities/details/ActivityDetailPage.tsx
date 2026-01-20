/** @format */

import { Grid2 } from '@mui/material'
import { useParams } from 'react-router'
import { useActivities } from '../../../lib/hooks/useActivities'
import ActivityDetailsChat from './ActivityDetailsChat'
import ActivityDetailsHeader from './ActivityDetailsHeader'
import ActivityDetailsSidebar from './ActivityDetailsSidebar'
import ActivityDetailsInfo from './ActivityDetailsInfo'

export default function ActivityDetailsPage() {
  const { id } = useParams()
  const { activity, isLoadingActivity } = useActivities(id)

  if (isLoadingActivity) return <div>Loading...</div>
  if (!activity) return <div>Activity not found</div>

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailsChat />
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailsSidebar />
      </Grid2>
    </Grid2>
  )
}
