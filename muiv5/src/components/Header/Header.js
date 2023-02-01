import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


import NotificationMsg from '../../components/common/NotificationMsg/NotificationMsg';
import CommonButton from '../../components/common/CommonButton/CommonButton';


const Header=({ title }) => {

    const headerStyles={
        wrapper: {
            // width: `calc(100% - ${drawerWidth}px)`,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '20px'
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            // * used to apply this to all elements inside
            '*': {
                marginRight: '5px'
            }
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            marginLeft: '20px'
        },
        webButton: {
            marginRight: '5px'
        },
        toDocLink: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer'
            }
        }

    }




    const fakeNotificatioData=[
        {
            id: 0,
            label: "message 1"
        },
        {
            id: 1,
            label: "message 2"
        },
        {
            id: 2,
            label: "message 3"
        },
    ]
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <CommonButton sx={headerStyles.toDocLink}>Go to docs</CommonButton>
                <NotificationMsg badgeColor="darkwhite" iconColor="white" msgDataList={fakeNotificatioData} />
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </Box>
            {/* second row of the header */}
            <Box sx={headerStyles.middleRow}>
                <Typography variant='h1'>{title}</Typography>
                <Box>
                    <CommonButton variant="outlined" sx={headerStyles.webButton}>Web setup</CommonButton>
                    <Tooltip title="Help me out!!">
                        <IconButton aria-label="help" color='white'>
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>


        </Box>


    )
}

export default Header