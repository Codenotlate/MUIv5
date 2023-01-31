import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const NotificationMsg=({ badgeContent, badgeColor, iconColor }) => {
    const hasMsgContent=`You have ${badgeContent} new messages`;
    const noMsgContent="You don't have any new message";
    return (

        <Tooltip title={badgeContent? hasMsgContent:noMsgContent}>
            <IconButton aria-label="Messages">
                <Badge badgeContent={badgeContent} color={badgeColor}>
                    <MailIcon color={iconColor} />
                </Badge>
            </IconButton>
        </Tooltip>
    )
}

export default NotificationMsg