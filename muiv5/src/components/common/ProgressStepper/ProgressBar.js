import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



const ProgressBar=() => {
    const [activeStep, setActiveStep]=useState(0);

    const handleBack=() => {
        setActiveStep((step) => step-1);
    }

    const handleNext=() => {
        setActiveStep((step) => step+1);
    }

    return (
        <MobileStepper
            steps={6}
            activeStep={activeStep}
            position="static"
            variant='progress'
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep===5}>
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
    )
}

export default ProgressBar



