import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import CommonButton from '../CommonButton/CommonButton';
import { modalStyles } from './styles';


const BasicModal=({ open, handleClose, title, subTitle, content, onSubmit }) => {





    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyles.wrapper}>
                    <Typography
                        variant='h6'
                        component='h2'
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{ mt: 2 }}
                    >
                        {subTitle}
                    </Typography>


                    {content}

                    <Box sx={modalStyles.buttons}>
                        <CommonButton variant="contained" onClick={onSubmit}>
                            Submit
                        </CommonButton>
                        <CommonButton onClick={handleClose}>
                            Cancel
                        </CommonButton>
                    </Box>
                </Box>

            </Modal>
        </div>
    );

}

export default BasicModal