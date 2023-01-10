import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";


import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Grid item xs={3}><Navbar /></Grid>

      <Outlet />
    </Grid>

  );
}

export default App;

/*
navbar component
copy drawer from website, make adjustment for color
add a const in navbar to store all the items in navbar, with an array has id, icon, label and route.
replace drawer with our item array. update id & icon.
add sx override, and separate the styles out as a file.

*/