

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box } from '@chakra-ui/react'
import Nav from './components/Nav'
import background from './assets/DesertLights.jpg'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box
        bgImage={background}
        bgPosition='center'
        minH='100vh'
        width='100%'
      >
      <Nav />
      </Box>
    </ChakraProvider>
  )
}

export default App;