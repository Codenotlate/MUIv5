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
    const [searchResults, setSearchResults]=useState(users);


    const getHeader=() => {
        const handleSearch=(event) => {
            filterData(event.target.value);
        }

        const filterData=(value) => {
            const lowercaseVal=value.toLowerCase().trim();
            if (lowercaseVal!=='') {
                const filteredRes=users.filter((item) => {
                    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(lowercaseVal));
                })
                setSearchResults(filteredRes);
            } else {
                setSearchResults(users);
            }
        }

        const addUser=() => {
            // console.log('Add User Clicked!');
            setModalOpen(true)
        }

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder='Find something..'
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
        setUsers((oldUsers) => ([...oldUsers, { ...data }]));
        setSearchResults((oldUsers) => ([...oldUsers, { ...data }]));
        setModalOpen(false);
    }

    const getContent=() => {
        return (
            <Box>
                {searchResults.length?
                    searchResults.map((user) => (
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
                        There is no user for now.
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