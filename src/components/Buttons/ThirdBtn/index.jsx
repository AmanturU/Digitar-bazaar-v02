import React from 'react'
import { Button } from '@chakra-ui/react'

const ThirdBtn = (props) => {
  const { fontSize, fontWeight, lineHeight, padding, ...restProps } = props

  return (
    <Button
      borderRadius="50px"
      background="none"
      color="#FE3796"
      textAlign="center"
      fontFamily="Plus Jakarta Sans"
      fontStyle="normal"
      fontWeight={fontWeight || '600'}
      lineHeight={lineHeight || '24px'}
      padding={padding || '8px 30px'}
      fontSize={fontSize}
      _hover={{
        transform: 'translateY(-2px)', // Приподнятие на 2 пикселя
        transition: 'transform 0.4s ease-in-out', // Замедление в течение 0.2 секунды
      }}
      _active={{
        background: 'rgba(0, 0, 0, 0.1)',
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

export default ThirdBtn