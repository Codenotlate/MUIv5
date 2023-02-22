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
    const [users, setUsers]=useState([]);

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

    const addNewUser=(data) => {
        // console.log(data);
        // setUsers((oldUsers) => (oldUsers.concat([data])));
        setUsers((oldUsers) => ([...oldUsers, { ...data }]));
        setModalOpen(false);
    }

    const getContent=() => {
        return (
            <Box>
                {users.length?
                    users.map((user) => (
                        <Box key={user.userId} sx={{ marginBottom: '20px' }}>
                            <Typography>User ID: {user.userId}</Typography>
                            <Typography>Email: {user.email}</Typography>
                            <Typography>Phone Number: {user.phoneNumber}</Typography>
                        </Box>
                    )):
                    <Typography
                        align='center'
                        sx={{ fontSize: '1.3rem', margin: '40px 16px', color: 'rgba(0,0,0,0.6)' }}
                    >
                        This is the content part
                    </Typography>
                }


            </Box>
        )
    }



    return (
        <GridWrapper>
            <BasicCard header={getHeader()} content={getContent()} />
            <NewUserModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                addNewUser={addNewUser}
            />
        </GridWrapper>
    )
}

export default Login