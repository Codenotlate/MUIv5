import AdbTwoToneIcon from '@mui/icons-material/AdbTwoTone';
import AgricultureTwoToneIcon from '@mui/icons-material/AgricultureTwoTone';
import AddToDriveTwoToneIcon from '@mui/icons-material/AddToDriveTwoTone';
import AlarmAddTwoToneIcon from '@mui/icons-material/AlarmAddTwoTone';
import AnchorTwoToneIcon from '@mui/icons-material/AnchorTwoTone';


export const mainNavbarItems=[
    {
        id: 0,
        icon: <AdbTwoToneIcon />,
        label: 'Home',
        route: 'pathHome',
    },
    {
        id: 1,
        icon: <AgricultureTwoToneIcon />,
        label: 'News',
        route: 'pathNews',
    },
    {
        id: 2,
        icon: <AddToDriveTwoToneIcon />,
        label: 'Notes',
        route: 'pathNotes',
    },
    {
        id: 3,
        icon: <AlarmAddTwoToneIcon />,
        label: 'Trash',
        route: 'pathTrash',
    },
    {
        id: 4,
        icon: <AnchorTwoToneIcon />,
        label: 'Login',
        route: 'pathLogin',
    },
]
