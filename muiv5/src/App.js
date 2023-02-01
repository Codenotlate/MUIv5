import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Box from '@mui/material/Box';

import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const drawerWidth=240;
  const [title, setTitle]=useState("");
  const location=useLocation();

  useEffect(() => {
    // console.log(location.pathname);
    const parsedTitle=location.pathname.replace(/\W/g, '');
    setTitle(parsedTitle.slice(4)+' Page Title');
  }, [location])


  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: `calc(100% - ${drawerWidth}px)` }}>
        <Header title={title} />
        <Outlet />
      </Box>
    </Box>
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