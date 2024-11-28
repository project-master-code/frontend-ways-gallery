import {
  Box,
  Flex,
  FormControl,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function Home(): React.ReactNode {
  return (
    <VStack
      p={'50px'}
      mt={'30px'}
      height={'100%'}
    >
      <Flex
        color={'brand.active'}
        width={'100%'}
        mb={'10px'}
        justifyContent={'space-between'}
      >
        <FormControl width={''}>
          <Select
            placeholder="Today"
            bg={'brand.youngGrey'}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>
        <FormControl
          width={''}
          as={'form'}
        >
          <Input
            type={'search'}
            placeholder="search"
            bg={'brand.youngGrey'}
          ></Input>
        </FormControl>
      </Flex>
      <Box width={'100%'}>
        <Text fontWeight={'bold'}>today's post</Text>
      </Box>
      <HStack
        width={'100%'}
        rowGap={'40px'}
        columnGap={'20px'}
        wrap={'wrap'}
        height={'100%'}
        overflow={'auto'}
        display={'flex'}
        justifyContent={'center'}
        paddingBottom={'100px'}
      ></HStack>
    </VStack>
  );
}
