import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NextAction = ({
  onClose,
  isOpen,
}) => {
  const navigate = useNavigate()

  const navigateToMain = () => {
    // navigate(`/users/${userIdJWT}/settings`)
    console.log('1')
  }

  const navigateToConnectWallet = () => {
    // onClose()
    // navigate('/')
    console.log('2')
  }
  const navigateToCreate = () => {
    navigate('/create/')
    onClose()
  }
  const navigateToExplore = () => {
    // onClose()
    // navigate('/')
    console.log('4')
  }


  return (
    <Modal isCentered isOpen={isOpen} size={'xl'} onClose={onClose}>
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="10%"
        backdropBlur="8px"
      />
      <ModalContent>
        <ModalHeader color="#FE3796" fontFamily="Plus Jakarta Sans" fontSize="20px" fontStyle="normal" fontWeight="700" lineHeight="24px">
          Congratulations on successfully updating your profile!
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <Box fontFamily="Plus Jakarta Sans" fontSize="16px" fontStyle="normal" fontWeight="600" lineHeight="21px">
            New features are available to you:
          </Box>

          <Box fontFamily="Plus Jakarta Sans" fontSize="16px" fontStyle="normal" fontWeight="600" lineHeight="21px" mt="4">
            <Text>
              1&#41; Explore the home page, there&apos;s a lot of interesting stuff there.
            </Text>
            <Text>
              2&#41; Connect your wallet to buy NFT and collections.
            </Text>
            <Text>
              3&#41; Create unique NFTs or collections.
            </Text>
            <Text>
              4&#41; Familiarize yourself with the community of our project.
            </Text>
          </Box>

          <Box fontFamily="Plus Jakarta Sans" fontSize="16px" fontStyle="normal" fontWeight="600" lineHeight="21px" mt="4">
            We wish you good luck and enjoy your time on our platform!
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="pink" onClick={navigateToMain} mr={'4'}>
            1
          </Button>
          <Button colorScheme="purple" onClick={navigateToConnectWallet} mr={'4'}>
            2
          </Button>
          <Button colorScheme="pink" onClick={navigateToCreate} mr={'4'}>
            3
          </Button>
          <Button colorScheme="purple" onClick={navigateToExplore}>
            4
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NextAction