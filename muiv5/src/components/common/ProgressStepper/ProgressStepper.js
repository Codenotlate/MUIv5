import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CommonButton from '../CommonButton/CommonButton';



const ProgressStepper=({ steps, stepDescriptions }) => {
    const [activeStep, setActiveStep]=useState(0);
    const [completed, setCompleted]=useState({});
    const totalSteps=steps.length;
    const completedSteps=Object.keys(completed).length;
    const allStepsCompleted=totalSteps===completedSteps;

    const handleBack=() => {
        setActiveStep((prevStep) => prevStep-1);
    }

    const handleNext=() => {
        const newCompleted=completed;
        newCompleted[activeStep]=true;
        setCompleted(newCompleted);
        setActiveStep((prevStep) => prevStep+1);
        // console.log(completed);
    }

    const handleReset=() => {
        setActiveStep(0);
        setCompleted({});
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}

            </Stepper>
            {allStepsCompleted?
                (<div>
                    <Typography sx={{ mt: 2, mb: 1 }}>You have finished all steps!</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <CommonButton
                            variant="contained"
                            onClick={handleReset}

                        >
                            Reset
                        </CommonButton>
                    </Box>

                </div>):
                (<div>
                    <Typography sx={{ mt: 2, mb: 1 }}>{stepDescriptions[activeStep]}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

                        <CommonButton variant="contained" onClick={handleBack} disabled={activeStep===0}>
                            Back
                        </CommonButton>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <CommonButton variant="contained" onClick={handleNext}>
                            {activeStep===totalSteps-1? 'Submit':'Next'}
                        </CommonButton>
                    </Box>

                </div>

                )

            }


        </Box>

    )
}

export default ProgressStepper