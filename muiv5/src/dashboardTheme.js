import { createTheme } from '@mui/material/styles';

export const dashboardTheme=createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: 8.5,
                    textTransform: 'none',
                    '&.MuiButton-contained': {
                        backgroundColor: '#009be5',
                        '&:hover': {
                            backgroundColor: '#006db3'
                        },
                    },
                    '&.MuiButton-outlined': {
                        color: "#fff",
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                        },
                    },
                    '&.Mui-disabled': {
                        backgroundColor: 'rgba(0, 0, 0,0.38)',
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.7rem',
                },
            },
        },
    },
    // define new color theme
    palette: {
        white: {
            main: '#fff',
        },
        darkblue: {
            main: '#001E3C'
        },
        darkwhite: {
            main: '#f8f8df'
        }
    },
    // define typo size
    typography: {
        h1: {
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
        },
    },

});
