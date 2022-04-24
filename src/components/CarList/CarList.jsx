import * as React from 'react';
import Box from '@mui/material/Box';
import {
    Divider,
    Typography,
    CardContent,
} from "@mui/material";
import Card from '@mui/material/Card';

const cardLeft = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 16,fontColor:'#666666',fontWeight: 400,fontFamily: 'PingFang SC' }} color="text.secondary" gutterBottom>
                Current Price
            </Typography>
            <Typography sx={{ fontSize: 30,fontColor:'#000000',fontWeight: 500,pt:'29px',fontFamily: 'PingFang SC' }} component="div">
                1.09 ETH
            </Typography>
            <Typography sx={{ pt:'27px',fontSize: 16,fontColor:'#666666',fontWeight: 400 ,fontFamily: 'PingFang SC',}} color="text.secondary">
                ≈$2809.23
            </Typography>

        </CardContent>

    </React.Fragment>
);

const cardRight = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 16,fontColor:'#666666',fontWeight: 400,fontFamily: 'PingFang SC' }} color="text.secondary" gutterBottom>
                Sale ends March 4, 2022 at 8:04pm CST
            </Typography>
            <Typography sx={{ float:'left',fontSize: 30,fontColor:'#000000',fontWeight: 500,pt:'29px',fontFamily: 'PingFang SC' }} component="div">
                25
            </Typography>
            <Typography sx={{ float:'left',fontSize: 30,fontColor:'#000000',fontWeight: 500,pt:'29px',pl:'58px',pr:'72px',fontFamily: 'PingFang SC' }} component="div">
                35
            </Typography>
            <Typography sx={{ fontSize: 30,fontColor:'#000000',fontWeight: 500,pt:'29px',fontFamily: 'PingFang SC' }} component="div">
                09
            </Typography>
            <Typography sx={{ float:'left',pt:'27px',fontSize: 16,fontColor:'#666666',fontWeight: 400 ,fontFamily: 'PingFang SC',}} color="text.secondary">
                Hours
            </Typography>
            <Typography sx={{ float:'left',pt:'27px',fontSize: 16,fontColor:'#666666',fontWeight: 400 ,pl:'49px',pr:'48px', fontFamily:'PingFang SC',}} color="text.secondary">
                Minutes
            </Typography>
            <Typography sx={{pt:'27px',fontSize: 16,fontColor:'#666666',fontWeight: 400 ,fontFamily: 'PingFang SC',}} color="text.secondary">
                Seconds
            </Typography>

        </CardContent>

    </React.Fragment>
);


export default function BoxComponent() {
    return (
                    <Box sx={{margin:'44px 0 0 50px',width:'100%'}}>
                        <Box sx={{ float:'left' }}>
                            <Card variant="none">{cardLeft}</Card>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{
                            height:'170px',
                            margin:'0 48px 0 50px',
                            float:'left',
                        }}/>
                        <Box sx={{ float:'left' }}>
                            <Card variant="none">{cardRight}</Card>
                        </Box>
                    </Box>
    );
}