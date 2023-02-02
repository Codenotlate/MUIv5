import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const BasicCard=({ header, content }) => {
    const basicCardStyles={
        width: '1050px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '8px',
    }

    return (
        <Card sx={basicCardStyles}>
            {header}
            <CardContent>
                {content}

            </CardContent>
        </Card>
    )
}

export default BasicCard