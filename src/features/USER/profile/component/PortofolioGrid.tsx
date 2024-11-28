import { SimpleGrid, Box, Heading, AspectRatio, Image } from '@chakra-ui/react';

const portfolioItems = [
  {
    id: 1,
    title: 'Food Delivery UI',
    image: '/food-delivery-ui.png',
  },
  {
    id: 2,
    title: 'Music Platform',
    image: '/music-platform.png',
  },
];

export default function PortfolioGrid() {
  return (
    <Box
      maxW="container.xl"
      mx="auto"
      px={4}
      py={8}
    >
      {/* Title */}
      <Heading
        as="h3"
        size="lg"
        mb={6}
      >
        My Works
      </Heading>

      {/* Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
      >
        {portfolioItems.map((item) => (
          <Box
            key={item.id}
            overflow="hidden"
            borderRadius="md"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={item.image}
                alt={item.title}
                objectFit={'cover'}
              />
            </AspectRatio>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
