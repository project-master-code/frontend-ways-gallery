import {
  Avatar,
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import InputForm from '../../auth/component/Input-Form';
import {
  ProfileSchema,
  profileSchema,
} from '../../../../schemas/profile-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { detailInputForm } from '../../auth/types/input-form-types';

const inputFormProfile: detailInputForm[] = [
  { placeHolder: 'Greeting', type: 'text', inputName: 'asu' },
  { placeHolder: 'Fullname', type: 'text', inputName: 'fullname' },
];

export default function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({ resolver: zodResolver(profileSchema) });

  return (
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
          <GridItem colSpan={{ base: 1, md: 3 }}>
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
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <VStack
              spacing={6}
              marginTop={10}
            >
              <form>
                {/* Avatar */}
                <VStack spacing={6}>
                  <Box>
                    <Avatar
                      border={'2px dashed'}
                      size="2xl"
                      src="/placeholder.svg"
                    />
                  </Box>

                  {/* Text */}
                  <InputForm
                    ElementDetails={inputFormProfile}
                    registerHook={register}
                    errors={errors}
                  />
                  <Button
                    type="submit"
                    width={'64px'}
                  >
                    save
                  </Button>
                </VStack>
              </form>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </main>
    </VStack>
  );
}
