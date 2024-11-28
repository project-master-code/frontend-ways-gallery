import { Box, GridItem, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import PortfolioGrid from './PortofolioGrid';
import ProfileHeader from './ProfileHeader';

export default function Profile(): React.ReactNode {
  return (
    <>
      <VStack
        p={'50px'}
        mt={'30px'}
        height={'100%'}
        overflowY={'auto'}
      >
        <main>
          <SimpleGrid
            columns={{ base: 2, md: 5 }}
            gap={{ base: '24px', md: '40px' }}
          >
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <ProfileHeader />
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <Box position={'relative'}>
                <Box
                  zIndex={-1}
                  position={'absolute'}
                  marginTop={10}
                  backgroundColor={'#2FC4B2'}
                  padding={'20px'}
                  display={'flex'}
                  width={'450px'}
                  right={-200}
                  top={-100}
                  height={'60vh'}
                  flexWrap={'wrap'}
                ></Box>
              </Box>
              <Box
                backgroundColor={'white'}
                border={'2px dashed'}
                marginTop={10}
                padding={'20px'}
                display={'flex'}
                width={'100%'}
                flexWrap={'wrap'}
              >
                <Image
                  src={'/'}
                  width={'100%'}
                  height={'300px'}
                />
              </Box>
            </GridItem>
          </SimpleGrid>
          <PortfolioGrid />
        </main>
      </VStack>
    </>
  );
}
