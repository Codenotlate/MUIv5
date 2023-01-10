const drawerWidth=240;

export const navbarStyles={
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#001E3C',
            color: '#f8f8df'
        },
    },
    icon: {
        color: '#f8f8df',
        ml: '30px',
        my: '8px',
    },
    text: {
        my: '8px',
        '& span': {
            marginLeft: '15px',
            fontSize: '18px',
        }

    }

}