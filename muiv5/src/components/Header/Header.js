import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';



import NotificationMsg from '../../components/common/NotificationMsg/NotificationMsg';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import { Box } from '@mui/system';

const Header=({ title }) => {
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
        <Box>
            <Stack direction="row" spacing={2}>
                <CommonButton variant="outlined">Go to docs</CommonButton>
                <NotificationMsg badgeColor="secondary" iconColor="action" msgDataList={fakeNotificatioData} />
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </Stack>
            {/* second row of the header */}
            <Typography variant='h5'>{title}</Typography>
            <CommonButton variant="outlined">Web setup</CommonButton>
            <Tooltip title="Help me out!!">
                <IconButton aria-label="help" color='secondary'>
                    <HelpIcon />
                </IconButton>
            </Tooltip>


        </Box>


    )
}

export default Header