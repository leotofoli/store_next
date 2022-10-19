import type { NextPage } from 'next'
import { Grid, TextField, Typography, Box, Button, FormControlLabel } from '@mui/material'
import { CheckBox } from '@mui/icons-material'

const Home: NextPage = () => {
  return (
    <Grid 
      sx={{ height:"100hv" }} 
      container 
      justifyContent={"center"} 
      alignItems={"center"}
    >
      <Grid marginTop={30} item xs={3} sm={3} md={3}>
        <form>
          <Box sx={{ textAlign: "center" }}>          
            <Typography variant="h4">Welcome</Typography>
            <Typography variant="body1">Please Login</Typography>
          </Box>
          <TextField
            variant="outlined"
            label="Email address"
            margin="dense"
            sx={{m:1}}
            type="email"
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Password"
            margin="dense"
            sx={{m:1}}
            type="password"
            fullWidth
          />          
          <br/>
          <Button sx={{ ml:1 }} fullWidth variant="contained" color="primary" size="large">
              Login
          </Button>      
        </form>
      </Grid>
    </Grid>
  )
}

export default Home
