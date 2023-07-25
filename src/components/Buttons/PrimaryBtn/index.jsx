import React from 'react'
import { Button } from '@chakra-ui/react'

const PrimaryBtn = (props) => {
  const { fontSize, fontWeight, lineHeight, padding, ...restProps } = props

  return (
    <Button
      borderRadius="50px"
      background="var(--main, #FE3796)"
      color="var(--neutral-white, #FFF)"
      fontFamily="Plus Jakarta Sans"
      fontStyle="normal"
      transition="background 0.3s ease-in-out"
      fontWeight={fontWeight || '600'}
      lineHeight={lineHeight || '24px'}
      padding={padding || '8px 30px'}
      fontSize={fontSize}
      _hover={{
        transform: 'translateY(-2px)', // Приподнятие на 2 пикселя
        transition: 'transform 0.4s ease-in-out', // Замедление в течение 0.2 секунды
      }}
      _active={{
        background: 'var(--main,  #C9187C)',
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

export default PrimaryBtn