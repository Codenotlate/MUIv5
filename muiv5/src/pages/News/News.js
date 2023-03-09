import React from 'react'

import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import ProgressStepper from '../../components/common/ProgressStepper/ProgressStepper';


const News=() => {

    const steps=['Step1', 'Step2', 'Step3']
    const stepDescriptions=['Select master blaster campaign settings', 'Create an ad group', 'Create an ad']

    return (
        <GridWrapper>
            <BasicCard content={<ProgressStepper steps={steps} stepDescriptions={stepDescriptions} />} />

        </GridWrapper>



    )
}

export default News