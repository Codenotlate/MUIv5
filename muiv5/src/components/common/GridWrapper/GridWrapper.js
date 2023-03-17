import React from 'react'
import Grid from '@mui/material/Grid';

import { GridWrapperStyles } from './styles';


const GridWrapper=({ children }) => {
    return (
        <Grid item xs={12} sx={GridWrapperStyles}>
            {children}
        </Grid>
    )
}

export default GridWrapper