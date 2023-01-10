import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import News from "./pages/News/News"
import Notes from "./pages/Notes/Notes"
import Trash from "./pages/Trash/Trash"
import Login from "./pages/Login/Login"

import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={0}>
      <Router>
        <Grid item xs={3}>
          <Navbar />
        </Grid>
        <Outlet />

        <Routes>
          <Route path='/pathHome' element={<Home />} />
          <Route path='/pathNews' element={<News />} />
          <Route path='/pathNotes' element={<Notes />} />
          <Route path='/pathTrash' element={<Trash />} />
          <Route path='/pathLogin' element={<Login />} />
        </Routes>

      </Router>
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