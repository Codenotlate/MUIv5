import React from 'react';
import CommonButton from '../../components/common/CommonButton/CommonButton';


const Home=() => {
    const buttonStyles={
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 20,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3'
            },
        },
        '&.MuiButton-outlined': {
            color: "#009be7",
            borderColor: '#007be5',
            '&:hover': {
                backgroundColor: '#009be5'
            },
        },


    };
    return (
        <div>
            <div>This is the Home page.</div>
            <CommonButton variant="contained" sx={buttonStyles}>
                HomeButton Contained
            </CommonButton>
            <CommonButton variant="outlined" sx={buttonStyles}>
                HomeButton Outlined
            </CommonButton>
        </div>
    )
}

export default Home