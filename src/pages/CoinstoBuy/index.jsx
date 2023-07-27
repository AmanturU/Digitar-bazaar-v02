import React, { useState } from 'react'
import MainLayout from '../../elements/layouts/Main'
import { Box, Text, Avatar, Flex, Image } from '@chakra-ui/react'
import Modalwindow from '../../components/Modal'

const topCoinstobuy = {
  textAlign: 'center',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '20px',
  paddingTop: '20px',
}

const Cardstobuycoinsimg = {
  width: '100px',
}

const Cardstobuycoins = {
  width: '300px',
  height: '250px',
  border: '1px gray solid',
  borderRadius: '10px',
  margin: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}

const CoinstoBuy = (props) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <MainLayout
      PageHeadline="Connect Your Wallet"
      textPathFirst="Home"
      textPathSecond="Connect Your Wallet"
    >
      <Box overflowX={'hidden '} w={'full'} p={'80px 0 140px 0'}>
        <Flex justifyContent={'center'} sx={topCoinstobuy}>
          <Box sx={Cardstobuycoins} onClick={handleOpenModal}>
            <Image sx={Cardstobuycoinsimg} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png'} alt="Metamask" />
            <Text sx={topCoinstobuy}>Metamask</Text>
          </Box>
          <Box sx={Cardstobuycoins} onClick={handleOpenModal}>
            <Image sx={Cardstobuycoinsimg} src={'https://ph-files.imgix.net/f05a61be-d906-4ad8-a68d-88f7c257574d.png?auto=format'} alt="Phantom" />
            <Text sx={topCoinstobuy}>Phantom</Text>
          </Box>
          <Box sx={Cardstobuycoins} onClick={handleOpenModal}>
            <Image sx={Cardstobuycoinsimg} src={'https://altcoinsbox.com/wp-content/uploads/2023/03/trust-wallet-logo.png'} alt="Trust Wallet" />
            <Text sx={topCoinstobuy}>Trust Wallet</Text>
          </Box>
        </Flex>
        <Flex justifyContent={'center'} sx={topCoinstobuy}>
          <Box sx={Cardstobuycoins} onClick={handleOpenModal}>
            <Image sx={Cardstobuycoinsimg} src={'https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png'} alt="WalletConnect"/>
            <Text sx={topCoinstobuy}>WalletConnect</Text>
          </Box>
          <Box sx={Cardstobuycoins} onClick={handleOpenModal}>
            <Image sx={Cardstobuycoinsimg} src={'https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png'} alt="Coinbase" />
            <Text sx={topCoinstobuy}>Coinbase</Text>
          </Box>
        </Flex>
        {isModalOpen && (
          <Modalwindow onClose={handleCloseModal} header="Modal Title">
            <Text>Custom backdrop filters!</Text>
          </Modalwindow>
        )}
      </Box>
    </MainLayout>
  )
}

export default CoinstoBuy
