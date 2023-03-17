import React, { useState } from 'react'
import Box from '@mui/material/Box';

import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import ProgressStepper from '../../components/common/ProgressStepper/ProgressStepper';
import ProgressBar from '../../components/common/ProgressStepper/ProgressBar';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';

import CommonButton from '../../components/common/CommonButton/CommonButton';





const News=() => {
    // for progress stepper
    const steps=['Step1', 'Step2', 'Step3']
    const stepDescriptions=['Select master blaster campaign settings', 'Create an ad group', 'Create an ad']
    // for Snackbar
    const [open, setOpen]=useState(false);

    const handleClick=() => {
        setOpen(true);
    };

    const handleClose=(event, reason) => {
        if (reason==='clickaway') {
            return;
        }

        setOpen(false);
    };



    return (

        <GridWrapper>
            <Grid container spacing={2} sx={{ background: 'white', borderRadius: '8px', p: 2 }}>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="column" sx={{ gap: '16px' }}>
                        <ProgressStepper steps={steps} stepDescriptions={stepDescriptions} />
                        <ProgressBar />

                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <CommonButton variant="contained" onClick={handleClick}>
                            Open a snackbar
                        </CommonButton>
                        <BasicSnackbar
                            open={open}
                            message="I have you!"
                            severity="info"
                            handleClose={handleClose}
                            handleClick={handleClick}
                            autoHideDuration="1500" />
                    </Stack>
                </Grid>

            </Grid>


        </GridWrapper>



    )
}

export default News