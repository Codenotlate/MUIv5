import React, { useState } from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard'
import SearchBar from '../../components/common/SearchBar/SearchBar'
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


import CommonButton from '../../components/common/CommonButton/CommonButton';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import NewUserModal from '../../components/NewUserModal/NewUserModal';
import { cardHeaderStyles } from './styles';


const Login=() => {
    const [modalOpen, setModalOpen]=useState(false);

    const getHeader=() => {
        const handleSearch=(event) => {
            console.log(event.target.value);
        }

        const addUser=() => {
            // console.log('Add User Clicked!');
            setModalOpen(true)
        }

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder='You can search something here...'
                    onChange={handleSearch}
                // searchBarWidth='720px'
                />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
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
            <NewUserModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
            />
        </GridWrapper>
    )
}

export default Login