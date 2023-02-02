import React from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard'
import SearchBar from '../../components/common/SearchBar/SearchBar'
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


import CommonButton from '../../components/common/CommonButton/CommonButton';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';


const Login=() => {
    const cardHeaderStyles={
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0px 20px',
            height: '65px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        },
        addUserButton: {
            fontSize: '1rem'
        }
    }

    const getHeader=() => {
        const handleSearch=(event) => {
            console.log(event.target.value);
        }

        const addUser=() => {
            console.log('Add User Clicked!');
        }

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder='You can search something here...'
                    onChange={handleSearch}
                    searchBarWidth='720px'
                />
                <CommonButton
                    variant='contained'
                    onClick={addUser}
                    size="large"
                    sx={cardHeaderStyles.addUserButton}
                >
                    Add User
                </CommonButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
            </Box>
        )
    }

    const getContent=() => {
        return (
            <Box>
                <Typography
                    align='center'
                    sx={{ fontSize: '1.3rem', margin: '40px 16px', color: 'rgba(0,0,0,0.6)' }}
                >
                    This is the content part
                </Typography>

            </Box>
        )
    }

    return (
        <GridWrapper>
            <BasicCard header={getHeader()} content={getContent()} />
        </GridWrapper>
    )
}

export default Login