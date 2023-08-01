import React, { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

const TextWithReadMore = ({ maxWords, children }) => {
  const [showFullText, setShowFullText] = useState(false)

  const words = children.split(' ')

  const truncatedText = showFullText ? children : words.slice(0, maxWords).join(' ')

  const pStyles = {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  }

  const buttonText = {
    color: '#FE3796',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '21px',
  }

  return (
    <span>
      <Text sx={pStyles}>{truncatedText}</Text>
      {words.length > maxWords && (
        <button onClick={() => setShowFullText(!showFullText)}>
          <Flex>
            {showFullText ? '' : <Text sx={pStyles}>...</Text>}
            <Text mx={'1'} sx={buttonText}>
              {showFullText ? 'Hide' : 'Read More'}
            </Text>
          </Flex>
        </button>
      )}
    </span>

  )
}

export default TextWithReadMore
