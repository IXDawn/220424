import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Stack from '@mui/material/Stack';
import styled from 'styled-components'
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

const TextStyle = styled.div`
    background-color:#ffffff;
    margin:0 0 0 13px;
    height: 11px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #666666;
`

const theme = createTheme({
    palette: {
        neutral: {
            main: '#ffffff',
            contrastText: '#000000',
        },
    },
});


export default function ButtonGroupTop() {
    return (
                        <Stack direction="row" spacing={'14px'}>
                            <div >
                                <div style={{marginLeft:'49px'}}>
                                    <TextStyle>Listed on</TextStyle></div>
                                <br/>
                                <ThemeProvider theme={theme}>
                                    <Button href="#" variant="contained"  color="neutral" sx={{
                                        paddingRight:'23px',
                                        margin:'16px 14px 0 48px',
                                        width:'auto',
                                        height:'64px',
                                        fontSize:'16px',
                                        textTransform:'none',
                                        borderRadius:'32px',
                                        fontWeight:'400',
                                        fontFamily:'PingFang SC',
                                        fontColor:'#333333',
                                        boxShadow: '0px 9px 15px 1px rgba(0, 0, 0, 0.06)',
                                    }}>
                                        <Box sx={{margin:'14px 12px 14px 0px',width:'36px',height:'36px',}}>

                                            <FolderIcon sx={{width:'auto',height:'auto',color:'black'}}/>
                                        </Box>
                                        Opensea</Button>
                                </ThemeProvider>
                            </div>
                            <div >
                                <TextStyle >Collection</TextStyle>
                                <br/>
                                <ThemeProvider theme={theme}>
                                    <Button href="#" variant="contained"  color="neutral" sx={{
                                        paddingRight:'23px',
                                        margin:'16px 14px 0 0',
                                        width:'auto',
                                        height:'64px',
                                        fontSize:'16px',
                                        textTransform:'none',
                                        borderRadius:'32px',
                                        fontWeight:'400',
                                        fontFamily:'PingFang SC',
                                        fontColor:'#333333',
                                        boxShadow: '0px 9px 15px 1px rgba(0, 0, 0, 0.06)',
                                    }}>
                                        <Box sx={{margin:'14px 12px 14px 0px',width:'36px',height:'36px',}}>

                                            <PageviewIcon sx={{width:'auto',height:'auto'}}/>
                                        </Box>

                                        Sunmiya Club Offcial
                                    </Button>
                                </ThemeProvider>

                            </div>
                            <div >
                                <TextStyle >Owned by</TextStyle>
                                <br/>
                                <ThemeProvider theme={theme}>
                                    <Button href="#" variant="contained"  color="neutral" sx={{
                                        paddingRight:'23px',
                                        margin:'16px 0 0 0',
                                        width:'auto',
                                        height:'64px',
                                        fontSize:'16px',
                                        textTransform:'none',
                                        borderRadius:'32px',
                                        fontWeight:'400',
                                        fontFamily:'PingFang SC',
                                        fontColor:'#333333',
                                        boxShadow: '0px 9px 15px 1px rgba(0, 0, 0, 0.06)',
                                    }}>
                                        <Box sx={{margin:'14px 10px 14px 0px',width:'36px',height:'36px',}}>

                                            <AssignmentIcon sx={{width:'auto',height:'auto'}}/>
                                        </Box>

                                        Invisible Friends
                                    </Button>
                                </ThemeProvider>
                            </div>
                        </Stack>
    );
}