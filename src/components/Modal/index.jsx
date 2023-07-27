// Modalwindow компонент
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Input,
  Flex,
} from '@chakra-ui/react'
import Btn from '../Buttons/PrimaryBtn'

const topTextStyles = {
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '24px',
  fontWeight: '700',
  padding: '30px 0 0 0',
}
const bottomTextStyles = {
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '16px',
  fontWeight: '500',
  padding: '10px 0 0 0',
  color: ' #777E90',
  '& .boldcolor': {
    color: '#1B1B1B',
    fontWeight: '700',
  },
}

const Modalwindow = ({ onClose }) => {
  return (
    <>
      <Modal isCentered isOpen={true} onClose={onClose}>
        <ModalOverlay
          background-filter= "blur(8px)"
        />
        <ModalContent p={'20px 30px'}>
          <Text sx={topTextStyles}>Place a Bid </Text>
          <Text sx={bottomTextStyles} >You are about to place a bid for<span className="boldcolor"> yes_ NFT Club</span> Collection.</Text>
          <ModalCloseButton border={'1px solid #E6E8EC'} borderRadius={'50%'} />

          <Input padding={'28px 35px 28px 20px'} borderRadius={'20px'} mt={'8'} placeholder="Money you want to change..." />

          <Text fontWeight={'500'} mt={'8'} pr={'10'}>Enter bid amount</Text>
          <Input padding={'25px 35px 25px 20px'} borderRadius={'20px'} mt={'2'} placeholder="Minimum bid 0.4.2 ETH" />

          <Flex justifyContent={'space-between'} m={'40px 0 20px 0'}>
            <Text fontFamily={'Plus Jakarta Sans'} fontSize={'14px'}>Service fee</Text>
            <Text fontWeight={'700'} fontFamily={'Plus Jakarta Sans'} fontSize={'14px'}>0.1 ETH</Text>
          </Flex>

          <Flex justifyContent={'space-between'} p={'20px 0 20px 0'} borderTop={'1px solid #E6E8EC'}>
            <Text fontFamily={'Plus Jakarta Sans'} fontSize={'14px'}>Marketplace fee, 5%</Text>
            <Text fontWeight={'700'} fontFamily={'Plus Jakarta Sans'} fontSize={'14px'}>0.5 ETH</Text>
          </Flex>

          <Flex justifyContent={'space-between'} p={'20px 0 0 0'}>
            <Text fontFamily={'Plus Jakarta Sans'} fontSize={'14px'} fontWeight={'700'} pt={'2'}>Total bid amount</Text>
            <Text fontWeight={'700'} fontFamily={'Plus Jakarta Sans'} fontSize={'24px'} >4.12 ETH</Text>
          </Flex>

          <Btn onClick={onClose} fontSize={'14px'} padding={'25px 168px 25px 168px'} mt={'30px'}>Place a bid</Btn>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Modalwindow
