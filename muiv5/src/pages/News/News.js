import React from 'react'

import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import ProgressStepper from '../../components/common/ProgressStepper/ProgressStepper';
import ProgressBar from '../../components/common/ProgressStepper/ProgressBar';
import Box from '@mui/material/Box';


const News=() => {

    const steps=['Step1', 'Step2', 'Step3']
    const stepDescriptions=['Select master blaster campaign settings', 'Create an ad group', 'Create an ad']

    const getContent=() => {
        return (
            <Box>
                <ProgressStepper steps={steps} stepDescriptions={stepDescriptions} />
                <ProgressBar />

            </Box>
        )
    }

    return (
        <GridWrapper>
            <BasicCard content={getContent()} />

        </GridWrapper>



    )
}

export default News