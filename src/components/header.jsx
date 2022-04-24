
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { styled, useTheme  } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
} from "@mui/material";
import Link from "next/link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiAppBar from '@mui/material/AppBar';



const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         flexGrow: 0,
//
//         padding: theme.spacing(0),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginRight: -drawerWidth,
//         ...(open && {
//             transition: theme.transitions.create('margin', {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             // marginRight: 0,
//         }),
//     }),
// );

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: '#ffffff',
    zIndex:100,
    // position:'relative',
    width: '100%',
    height:'68px',
    float:'left',


    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        float:'left',
        width: '100%',
        height:'68px',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,

        }),
        // marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    marginTop:'68px',
    display: 'inherit',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',


}));

export default function BoxSx() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '25px',
        backgroundColor: '#F5F5F5',
        float:'left',
        '&:hover': {
            backgroundColor: '#9e9e9e',
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '848px',
        height: '48px',

        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(1),
            width: '848px',
            float:'left',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        float:'left',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(0.6, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,

            float:'left',
            // paddingRight: `calc(1em + ${theme.spacing(0)})`,
            transition: theme.transitions.create('width'),
            width: '760px',
            height:'40px',
            fontSize:'20px',
            [theme.breakpoints.up('md')]: {

                width: '760px',
                float:'left',
                height:'40px',
                fontSize:'20px',
            },
        },
    }));

    const BootstrapButton = styled(Button)({
        width:'168px',
        height:'42px',
        marginLeft:'22px',
        marginTop:'13px',
        marginRight:'0',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '16px',
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#000000',
        borderColor: '#000000',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#bdbdbd',
            borderColor: '#bdbdbd',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#bdbdbd',
            borderColor: '#bdbdbd',
        },
        // '&:focus': {
        //     boxShadow: '0 0 0 0.1rem #000000',
        // },
    });



        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);

        };

        const handleDrawerClose = () => {
            setOpen(false);

        };

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    return (
        <Box sx={{width:'100%',minwidth: '1480px',height:'68px'}}>
        <AppBar open={open} color='inherit' >
        <Box sx={{position:'relative',display:'flex'}}>
            <Box>
                <Brightness1Icon sx={{m:'20px 0 0 40px',
                    fontSize:'35px',
                    float:'left',
                    width:'28px',
                    height:'28px',
                }} underline="hover"/>
            </Box>
                <Box style={{
                    width:'51px',
                    height:'18px',
                    float: 'left',
                    margin:'25px 0 25px 9px',
                    fontSize:'18px',
                    fontFamily: 'FZZhengHeiS-EB-GB',
                    fontWeight: 'bold',
                    fontColor: '#000000'
                }}>Mfer</Box>



                <p style={{
                    backgroundColor:'#EBEBEB',
                    width:'1px',
                    height:'30px',
                    float: 'left',
                    marginLeft:'25px',
                    marginTop:'19px',
                    borderRadius: '1px',

                }}></p>

                {/*<Box  sx={{*/}
                {/*    height:'12px',*/}
                {/*    width:'68px',*/}
                {/*    padding:'28px 0 0 28px',*/}
                {/*    fontSize:'16px',*/}
                {/*    float:'left',*/}
                {/*    color:'#000000',*/}
                {/*    fontFamily: 'FZZhengHeiS-EB-GB',*/}
                {/*    fontWeight: 'bold',*/}


                {/*}}>*/}
                {/*</Box>*/}
            <Box sx={{
                height:'12px',
                width:'68px',
                margin:'27px 0 0 28px',
                fontSize:'16px',
                float:'left',
                color:'#000000',
                fontFamily: 'FZZhengHeiS-EB-GB',
                fontWeight: 'bold',
            }}>
                <Link href="#" >Discover</Link>
                </Box>


                <Box sx={{
                    width:'26px',
                    height:'13px',
                    margin:'27px 0 0 34px',
                    fontSize:'16px',
                    float:'left',
                    color:'#999999',
                    fontFamily: 'FZZhengHeiS-EB-GB',
                }} >
                <Link href="#">Sell</Link>
                </Box>

                <Box sx={{
                    // width:'1048px',
                    // height:'48px',

                    float: 'left',
                    margin:'10px 0 10px 32px',
                    // minWidth:'500px',

                }}>
                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search items, collections, and profiles"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>

            <Box sx={{float:'left',
                width:'168px',
                height:'42px',
            }}>
                <Stack spacing={2} direction="row">
                    <BootstrapButton variant="contained" disableRipple>
                        Connect Wallet
                    </BootstrapButton>
                </Stack>
            </Box>



            <Box sx={{float:'left',
                // width:'30px',
                // height:'30px',
                margin:'19px 0px 19px 20px',
            }}>
                {/*<CssBaseline />*/}
                {/*<AppBar position="fixed" open={open}>*/}
                {/*<Toolbar>*/}
                    {/*<Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">*/}
                    {/*    Persistent drawer*/}
                    {/*</Typography>*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                        aria-label={notificationsLabel(100)}
                    >
                        <Badge badgeContent={100} color="error">
                        <ShoppingCartIcon  sx={{
                            // width:'200%',
                        }}/>
                        </Badge>
                    </IconButton>
                {/*</Toolbar>*/}
                {/*</AppBar>*/}
                {/*<Main open={open}>*/}
                {/*    <DrawerHeader />*/}

                {/*</Main>*/}

            </Box>

            <Box sx={{ display: 'flex' }} >

                    <Drawer
                    // variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        zIndex:-100,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader >
                        <IconButton onClick={handleDrawerClose} >
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
        </Box>
        </Box>
        </AppBar>

        </Box>
    );
}
