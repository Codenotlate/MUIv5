import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';


const SearchBar=({ placeholder, onChange, searchBarWidth }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton>
                <SearchIcon sx={{ marginRight: '10px' }} />
            </IconButton>
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{ width: searchBarWidth, color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem' }}
                disableUnderline
            />
        </Box>

    )
}

export default SearchBar