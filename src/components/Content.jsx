import * as React from 'react';
import Box from '@mui/material/Box';
import {
    createTheme,
    Divider,
} from "@mui/material";
import CarList from './CarList/CarList';
import Taps01 from './Tapsmain'
import ButtonGroupTop from "./ButtonGroupTop/ButtonGroupTop";
import ButtonGroupCenterLeft from './ButtonGroupCenter/ButtonGroupCenterLeft'
import ButtonGroupCenterRight from './ButtonGroupCenter/ButtonGroupCenterRight'



export default function BoxComponent() {
    return (

<Box sx={{width:'1472px',height:'100%'}}>
<Box sx={{float:'inherit'}}>
        <Box component="span" sx={{
            float:'left',
            width:'548px',
            height:'888px',
            margin:'40px 0 0 80px',
            border: '1px dashed grey' }}>
            {/*<Button>Save</Button>*/}
        </Box>
    <Box sx={{
        marginLeft:'5px',
        float:'left'
    }}>
                <Box sx={{
                    // float:'left',
                    padding:'48px 0 0 57px',
                    // width: 'auto',
                    fontSize: '32px',
                    fontFamily: 'PingFang SC',
                    fontWeight: 'bold',
                    color:' #000000',
                }}>
                    <text>Invisible Friends #109</text>
                </Box>

                        <Box sx={{ml:'48px',mt:'38px'}}>
                        <Divider variant="middle" sx={{
                            // padding:'38px 120px 0 48px',
                            // float:'right',
                            width: '744px',
                        }}/>
                        </Box>

        <Box sx={{
            // float:'left',
            marginTop:'36px',
        }}>
            <ButtonGroupTop/>
        </Box>

        <Box sx={{margin:'44px 0 0 50px' }}>
            <CarList/>
        </Box>
<Box sx={{margin:'43px 0 0 100px' }}>
        <Box sx={{float:'left'}}>
            <ButtonGroupCenterLeft  />
        </Box>
    <Box sx={{padding:'0 0 0 10px', float:'left'}}>
            <ButtonGroupCenterRight />
        </Box>
    </Box>

        <Box sx={{margin:'49px 0 50px 48px',width:'670px',height:'100%',float:'left'}}>
            <Taps01/>
        </Box>
    </Box>

</Box>
</Box>

    );
}