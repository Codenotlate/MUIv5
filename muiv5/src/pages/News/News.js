import React from 'react'
import Grid from '@mui/material/Grid';

import NotificationMsg from '../../components/common/NotificationMsg/NotificationMsg';


const News=() => {
    return (
        <Grid item xs={9}>
            News
            <NotificationMsg badgeColor="secondary" badgeContent={100} iconColor="action" />


        </Grid>

    )
}

export default News