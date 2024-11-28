import { Avatar, Box, Button, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ProfileHeader() {
  return (
    <Box
      maxW="container.xl"
      mx="auto"
      px={4}
      py={{ base: 8, md: 12 }}
      textAlign="left"
    >
      <Stack spacing={6}>
        {/* Avatar */}
        <Avatar
          size="2xl"
          src="/placeholder.svg"
        />

        {/* Text */}
        <Stack spacing={4}>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '2xl' }}
            fontWeight="bold"
          >
            Radif Ganteng
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '4xl' }}
            fontWeight="bold"
          >
            Welcome To My Art
          </Heading>
        </Stack>

        {/* Button */}
        <Link to={'/profile/edit'}>
          <Button
            variant="outline"
            width={40}
            borderColor="emerald.400"
            color="emerald.400"
            _hover={{ bg: 'emerald.50' }}
          >
            Edit Profile
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
