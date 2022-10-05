import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

function Nav() {
    return (
        <Grid
            h='150px'
            templateColumns='repeat(5, 1fr)'
            gap={2}
            alignItems='center'
            paddingLeft={10}
        >
            <GridItem
                colSpan={1}
            >
                <HamburgerIcon color='whiteAlpha.500' />
            </GridItem>
            <GridItem
                colSpan={4}
                paddingLeft={20}
            >
                <Heading
                    color='white'
                    fontSize='5xl'
                    fontFamily='fantasy'
                >
                    Welcome to Asteri Lighting
                </Heading>
            </GridItem>
        </Grid>
    )
}

export default Nav