import React from 'react'
import { Button } from '@chakra-ui/react'

const SecondBtn = (props) => {
  const { fontSize, fontWeight, lineHeight, padding, ...restProps } = props

  return (
    <Button
      borderRadius="50px"
      background="none"
      color="#FE3796"
      border="1px solid var(--main, #FE3796)"
      fontFamily="Plus Jakarta Sans"
      fontStyle="normal"
      fontWeight={fontWeight || '600'}
      lineHeight={lineHeight || '24px'}
      padding={padding || '8px 30px'}
      fontSize={fontSize}
      _hover={{
        transform: 'translateY(-2px)',
        transition: 'transform 0.4s ease-in-out',
      }}
      _active={{
        background: 'rgba(0, 0, 0, 0.05)',
        transition: 'background 0.3s ease-in-out',
      }}
      _disabled={{
        background: '#393939',
        color: 'var(--black, #121212)',
        cursor: 'not-allowed',
      }}
      {...restProps}
    />
  )
}

export default SecondBtn
