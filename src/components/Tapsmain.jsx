import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Tap02 from './Tapcontent/Tap01'
import Attribute from "./Tapcontent/Tap01";
import Info from "./Tapcontent/Tap02";
import PriceHistory from "./Tapcontent/Tap03";
import Offers from "./Tapcontent/Tap04";
import Activity from "./Tapcontent/Tap05";

const blue = {
    50: '#99ffff',
    100: '#66ffff',
    200: '#99ffcc',
    300: '#66ffcc',
    400: '#99ff99',
    500: '#99ff66',
    600: '#66ff66',
    700: '#99ff33',
    800: '#99ff00',
    900: '#66ff00',
};

const Tab = styled(TabUnstyled)`
  font-family: PingFang SC, sans-serif;
  color: #000000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  background-color: #ffffff;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #e9e9e9;
    border-radius: 18px;
    
  }

  &:focus {
    color: #000000;
    border-radius: 18px;
    // outline: 2px solid ${blue[200]};
    // outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #000000;
    color: #ffffff;
    border-radius: 18px;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 388px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  border: 1px solid #F0F0F0;
  border-radius: 24px;
`;


export default function LabTabs() {

    return (

        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>Attribute</Tab>
                <Tab>Info</Tab>
                <Tab>Price History</Tab>
                <Tab>Offers</Tab>
                <Tab>Activity</Tab>
            </TabsList>
            <TabPanel value={0}><Attribute/></TabPanel>
            <TabPanel value={1}><Info /></TabPanel>
            <TabPanel value={2}><PriceHistory /></TabPanel>
            <TabPanel value={3}><Offers /></TabPanel>
            <TabPanel value={4}><Activity /></TabPanel>
        </TabsUnstyled>
    );
}
