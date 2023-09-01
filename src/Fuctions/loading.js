//Dependencies
import { CircularProgress, Grid } from '@mui/material'
//Style
import './loading.scss'

const Loading = () => {
  return (
    <Grid container className='loading-conatiner'>
        <div className='loading'>
            <p>Loading</p>
            <CircularProgress color="inherit" />
        </div>
    </Grid>
  )
}

export default Loading