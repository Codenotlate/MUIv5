import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import BasicModal from '../common/BasicModal/BasicModal'



const NewUserModal=({ open, handleClose }) => {
    const modalStyles={
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };

    const phoneRegExp=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema=yup
        .object()
        .shape({
            userId: yup.string()
                .required("User ID is required.")
                .min(4, "User ID must be at least 4 characters"),
            email: yup.string()
                .required("Email is required.")
                .email('Email is not valid.'),
            phoneNumber: yup.string()
                .matches(phoneRegExp, "Phone number is not valid"),
        });

    const { register, handleSubmit, formState: { errors } }=useForm({ resolver: yupResolver(validationSchema) });

    const addUser=(data) => {
        console.log(data);
        handleClose();
    }


    const getContent=() => {
        return (
            <Box sx={modalStyles.inputFields}>
                <TextField
                    label="User ID"
                    variant="outlined"
                    required
                    error={errors.userId? true:false}
                    helperText={errors.userId?.message}
                    {...register('userId')}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    required
                    error={errors.email? true:false}
                    helperText={errors.email?.message}
                    {...register('email')}
                />
                <TextField
                    label="Phone #"
                    variant="outlined"
                    required
                    error={errors.phoneNumber? true:false}
                    helperText={errors.phoneNumber?.message}
                    {...register('phoneNumber')}
                />
            </Box>
        )
    }



    return (
        <BasicModal
            open={open}
            handleClose={handleClose}
            title="New User Sign Up"
            subTitle="Fill out and hit 'submit' button!"
            content={getContent()}
            onSubmit={handleSubmit(addUser)}

        />
    )
}

export default NewUserModal