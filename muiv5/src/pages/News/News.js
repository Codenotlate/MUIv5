import React from 'react'
import Grid from '@mui/material/Grid';

import NotificationMsg from '../../components/common/NotificationMsg/NotificationMsg';


const News=() => {
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
        <Grid item xs={9}>
            News
            <NotificationMsg badgeColor="secondary" iconColor="action" msgDataList={fakeNotificatioData} />


        </Grid>

    )
}

export default News