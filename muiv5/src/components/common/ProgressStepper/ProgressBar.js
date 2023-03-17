import React, { useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/system';



const ProgressBar=() => {
    const [activeStep, setActiveStep]=useState(0);

    // const handleBack=() => {
    //     setActiveStep((step) => step-1);
    // }
    const handleReset=() => {
        setActiveStep(0);
    }

    const handleNext=() => {
        if (activeStep!==5) {
            setActiveStep((step) => step+1);
        }

    }

    return (
        <Box>
            <MobileStepper
                steps={6}
                activeStep={activeStep}
                position="static"
                variant='progress'
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext}>
                        {activeStep===5? 'You made it!':'Done Another Time!'}

                        <KeyboardArrowRight />

                    </Button>
                }
            // backButton={
            //     <Button size="small" onClick={handleBack} disabled={activeStep===0}>
            //         <KeyboardArrowLeft />
            //         Back
            //     </Button>
            // }

            />
            {activeStep===5?
                (<Button size="small" onClick={handleReset} disabled={activeStep!==5}>
                    Start from the beginning!

                </Button>):null
            }

        </Box>

    )
}

export default ProgressBar



