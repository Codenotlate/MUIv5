import React from 'react'
import { useNavigate } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import { mainNavbarItems } from './constants/NavbarItems';
import { navbarStyles } from './styles';

const Navbar=() => {
    const navigate=useNavigate();

    return (
        // <Grid item xs={3}>
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {mainNavbarItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => navigate(item.route)}>
                            <ListItemIcon sx={navbarStyles.icon}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={navbarStyles.text} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
        // </Grid>
    )
}

export default Navbar