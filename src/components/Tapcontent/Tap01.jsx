import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Box from "@mui/material/Box";
import ActivityTransfer from '../Activity/ActivityTransfer'

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #666666;
  cursor: pointer;
  font-size: 14px;
  //font-weight: bold;
  background-color: #FAFAFA;
  width: 58px;
  height:32px;
  padding: 5px 14px;
  margin: 6px 6px;
  border:1px solid #F0F0F0;
  border-radius: 4px;
  display: flex;
  justify-content: center;

  //&:hover {
  //  background-color: #000000;
  //  color: white;
  //}

  //&:focus {
  //  color: #000000;
  //  border-radius: 3px;
  //  outline: 2px solid #000000;
  //  outline-offset: 2px;
  //}

  &.${tabUnstyledClasses.selected} {
    background-color: #000000;
    color: #ffffff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 14px;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #ffffff;
  border-radius: 8px;
  //margin-bottom: 31px;
  display: flex;
  align-items: center;
  justify-content: left;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized() {
    return (
        <Box sx={{marginBottom:'50px'}}>
            <TabsUnstyled defaultValue={1}>
                <TabsList>
                    <text>Showing:</text>
                    <Tab>Mint</Tab>
                    <Tab>Listing</Tab>
                    <Tab>Sales</Tab>
                    <Tab>Bids</Tab>
                    <Tab>Transfer</Tab>
                </TabsList>
                <TabPanel value={1}><ActivityTransfer/></TabPanel>
                <TabPanel value={2}><ActivityTransfer/></TabPanel>
                <TabPanel value={3}><ActivityTransfer/></TabPanel>
                <TabPanel value={4}><ActivityTransfer/></TabPanel>
                <TabPanel value={5}><ActivityTransfer/></TabPanel>
            </TabsUnstyled>
        </Box>
    );
}
