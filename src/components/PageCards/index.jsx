import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, TabIndicator } from '@chakra-ui/react'
import Cardsone from '../Cards/CardNFT_timeOff'
import Button from '../Buttons/PrimaryBtn'
import CardNftTimeOn from 'components/Cards/CardNFT_timeOn'
import CardCollection from 'components/Cards/CardCollection'

const boxStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'center',
}

const Buttonstyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}


const Pagecards = (props) => {
  const { nftData,collectionData } = props
  return (
    <Tabs position="relative" variant="unstyled" mt={'50px'}>
      <TabList pl={'6'}>
        <Tab>All NFTs</Tab>
        <Tab>All Collections</Tab>
        <Tab>Favorited</Tab>
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
            {/* <Cardsone /> */}
            {nftData && nftData.map((nft) => (
              <CardNftTimeOn theme="white" key={nft.id} nftData={nft} />
            ))}

          </Box>
          <Box mt={'8'} sx={Buttonstyle}>
            <Button w={'189px'} h={'55px'}>Load More</Button>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box sx={boxStyles}>
            {/* <Cardsone /> */}
            {collectionData && collectionData.map((collection) => (
              <CardCollection theme="white" key={collection.id} collectionData={collection} />
            ))}

          </Box>
          <Box mt={'8'} sx={Buttonstyle}>
            <Button w={'189px'} h={'55px'}>Load More</Button>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Pagecards