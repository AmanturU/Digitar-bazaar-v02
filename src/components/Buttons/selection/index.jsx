import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'

import { ArrowUpDownIcon } from '@chakra-ui/icons'

const selection = (props) => {
  return (
    <Menu >
      <MenuButton
        fontWeight={'600'}
        fontSize={'18px'}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {props.name} <ArrowUpDownIcon color={'grey'} p={'3px 0 4px 0'} />
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default selection