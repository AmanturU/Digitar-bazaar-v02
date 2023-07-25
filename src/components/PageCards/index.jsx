import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, TabIndicator } from '@chakra-ui/react'
import Cardsone from '../Cards/CardNFT_timeOff'
import Cardstwo from '../Cards/CardCollection'
import Cardsthree from '../Cards/CardNFT_timeOn'
import Button from '../Buttons/PrimaryBtn'

const boxStyles = {
  gridTemplateColumns: 'repeat(3, 1fr)',
  display: 'grid',
  gap: '34px',
}

const Buttonstyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}


const Pagecards = () => {
  return (
    <Tabs position="relative" variant="unstyled" mt={'50px'}>
      <TabList pl={'6'}>
        <Tab>Collected</Tab>
        <Tab>Created</Tab>
        <Tab>Favorited</Tab>
        <Tab>Activity</Tab>
        <Tab>TInactive Listinghree</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="blue.500"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel>
          <Box sx={boxStyles}>
            <Cardsone />
            <Cardstwo />
            <Cardsthree />
            <Cardsthree />
            <Cardsone />
            <Cardstwo />
          </Box>
          <Box mt={'8'} sx={Buttonstyle}>
            <Button w={'189px'} h={'55px'}>Load More</Button>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Pagecards