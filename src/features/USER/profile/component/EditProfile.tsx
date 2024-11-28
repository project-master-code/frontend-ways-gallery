import {
  Avatar,
  Box,
  Button,
  GridItem,
  Image,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ProfileSchema,
  profileSchema,
} from '../../../../schemas/profile-schema';
import {
  getProfileAsync,
  putProfileAsync,
} from '../../../../stores/profiles/async';
import { useAppDispatch, useAppSelector } from '../../../../stores/stores';
import InputForm from '../../auth/component/Input-Form';
import { detailInputForm } from '../../auth/types/input-form-types';

const inputFormProfile: detailInputForm[] = [
  { placeHolder: 'Greeting', type: 'text', inputName: 'greeting' },
  { placeHolder: 'FullName', type: 'text', inputName: 'fullName' },
];

export default function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({ resolver: zodResolver(profileSchema) });
  const dispatch = useAppDispatch();
  const { profile, loading } = useAppSelector((state) => state.profiles);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [bestArtFile, setBestArtFile] = useState<File | null>(null);
  const userId = useAppSelector((state) => state.auth.user?.id);
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
  const [previewBestArt, setPreviewBestArt] = useState<string | null>(null);
  useEffect(() => {
    dispatch(getProfileAsync());
  }, [dispatch]);
  const onSubmit = async (data: ProfileSchema) => {
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('greeting', data.greeting!);

    if (avatarFile) {
      formData.append('avatar', avatarFile);
    }
    console.log('file', avatarFile);
    if (bestArtFile) {
      formData.append('bestArt', bestArtFile);
    }
    const profileId = userId!;

    const res = await dispatch(putProfileAsync({ profileId, formData }));
    console.log(res);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setPreviewAvatar(URL.createObjectURL(file));
    }
  };
  const handleBestArtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBestArtFile(file);
      setPreviewBestArt(URL.createObjectURL(file));
    }
  };

  return (
    <VStack
      p={'50px'}
      mt={'30px'}
      height={'100%'}
      overflowY={'auto'}
    >
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                justifyContent={'center'}
                flexWrap={'wrap'}
              >
                <label
                  htmlFor="bestArt-upload"
                  className="cursor-pointer"
                >
                  <Image
                    src={previewBestArt || profile.bestArt}
                    width={'full'}
                    height={'300px'}
                  />
                  <input
                    type="file"
                    id="bestArt-upload"
                    onChange={handleBestArtChange}
                  />
                </label>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <VStack
                spacing={6}
                marginTop={10}
              >
                {/* Avatar */}
                <VStack spacing={6}>
                  <Box></Box>
                  <label
                    htmlFor="avatar-upload"
                    className="cursor-pointer"
                  >
                    <Avatar
                      border={'2px dashed'}
                      size="2xl"
                      src={previewAvatar || profile.avatar}
                    />
                    <input
                      type="file"
                      id="avatar-upload"
                      onChange={handleAvatarChange}
                    />
                  </label>

                  {/* Text */}
                  <InputForm
                    ElementDetails={inputFormProfile}
                    registerHook={register}
                    errors={errors}
                  />
                  <Button
                    type="submit"
                    width={'64px'}
                    disabled={loading}
                  >
                    save
                  </Button>
                </VStack>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </form>
      </main>
    </VStack>
  );
}
