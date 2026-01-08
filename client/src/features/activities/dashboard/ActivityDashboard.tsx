/** @format */

import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetail from '../details/ActivityDetail'

type Props = {
  activities: Activity[]
  cancelSelectActivity: () => void
  selectActivity: (id: string) => void
  selectedActivity?: Activity
}
export default function ActivityDashboard({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && (
          <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />
        )}
      </Grid2>
    </Grid2>
  )
}
