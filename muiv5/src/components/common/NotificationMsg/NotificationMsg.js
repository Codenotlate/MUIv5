import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import BasicMenu from '../BasicMenu/BasicMenu';

const NotificationMsg=({ badgeColor, iconColor, msgDataList }) => {
    const [open, setOpen]=useState(false);
    const [anchorEl, setAnchorEl]=useState(null);
    const handleClick=(event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose=() => {
        setOpen(false);
    }

    const hasMsgContent=`You have ${msgDataList.length} new messages`;
    const noMsgContent="You don't have any new message";


    return (
        <div>
            <Tooltip title={msgDataList.length? hasMsgContent:noMsgContent}>
                <IconButton aria-label="Messages" onClick={msgDataList.length? handleClick:null}>
                    <Badge badgeContent={msgDataList.length} color={badgeColor}>
                        <MailIcon color={iconColor} />
                    </Badge>

                </IconButton>
            </Tooltip>
            <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} menuItems={msgDataList} />
        </div>
    )
}

export default NotificationMsg