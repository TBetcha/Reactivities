/** @format */

import { Grid2 } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetail from '../details/ActivityDetail'
import ActivityForm from '../form/ActivityForm'

type Props = {
  activities: Activity[]
  cancelSelectActivity: () => void
  selectActivity: (id: string) => void
  selectedActivity?: Activity
  openForm: (id?: string) => void
  closeForm: () => void
  editMode: boolean
  submitForm: (activity: Activity) => void
}
export default function ActivityDashboard({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  openForm,
  closeForm,
  editMode,
  submitForm,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} submitForm={submitForm} />
        )}
      </Grid2>
    </Grid2>
  )
}
