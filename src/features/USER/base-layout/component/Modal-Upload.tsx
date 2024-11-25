import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import "react-awesome-slider/dist/styles.css";
import formLabelCloud from "../../../../assets/image/cloud-computing 1.png";
import plusImage from "../../../../assets/image/plus 1.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { UploadSchema } from "../../../../schemas/upload-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema } from "../../../../schemas/upload-schema";
import { uploadAsync } from "../../../../stores/upload/async";
import { useAppDispatch } from "../../../../stores/stores";

interface ModalDetailProduct {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalUpload({ isOpen, onClose }: ModalDetailProduct) {
  const { register, handleSubmit, watch, reset } = useForm<UploadSchema>({ resolver: zodResolver(uploadSchema) });
  const [images, setImages] = useState<string[]>([]);
  const image = watch("images");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const file: string[] = [];
    if (image) {
      const data = image;
      data &&
        Array.from(data).forEach((data) => {
          file.push(URL.createObjectURL(data as any));
          setImages(file);
          return true;
        });
    }
  }, [image]);

  async function onSubmiData(data: UploadSchema) {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      for (let i of data.images) {
        formData.append("images", i);
      }

      const res = await dispatch(uploadAsync(data));
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Modal blockScrollOnMount={false} size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"brand.background"}>
          <Flex width={"100%"} alignItems={"center"} my={"80px"} direction={"column"}>
            <Grid
              width={"100%"}
              blur={"brand.blur.webkit"}
              border={"brand.blur.border"}
              backdropFilter={"brand.blur.backdrop"}
              gridTemplateColumns={`60% 35%`}
              justifyContent={"space-between"}
              padding={"20px 50px"}
              as="form"
              // action="http://localhost:9000/api/v1/upload"
              // method="POST"
              // encType="multipart/form-data"
              onSubmit={handleSubmit((data) => onSubmiData(data))}
            >
              <VStack>
                <FormControl border={"3px dashed"} width={"100%"} padding={"0px"} height={"300px"}>
                  <FormLabel display={"grid"} justifyContent={"center"}>
                    <Image src={formLabelCloud}></Image>
                    <Flex gap={"10px"} width={"100%"} justifyContent={"center"}>
                      <Text color={"brand.default"}>Browse</Text> to chose file
                    </Flex>
                  </FormLabel>
                  <Input type={"file"} {...register("images")} multiple name="images" hidden></Input>
                </FormControl>
                <HStack display={"flex"} gap={"5px"} width={"100%"} height={"300px"} overflow={"auto"} flexWrap={"wrap"} boxSizing="border-box">
                  {images.map((data) => {
                    return (
                      <Box border={"2px dashed"} padding={"20px"} display={"flex"} width={"32%"} flexWrap={"wrap"}>
                        <Image src={data ?? plusImage} width={"100%"} height={"150px"}></Image>
                      </Box>
                    );
                  })}
                </HStack>
              </VStack>
              <VStack display={"flex"} gap={"20px"}>
                <FormControl>
                  <Input type={"text"} {...register("title")} placeholder="tittle" border={"1px solid"} borderColor={"brand.default"}></Input>
                </FormControl>
                <FormControl>
                  <Textarea resize={"none"} {...register("description")} height={"200px"} placeholder="tittle" border={"1px solid"} borderColor={"brand.default"}></Textarea>
                </FormControl>
                <Box width={"100%"} display={"flex"} gap={"10px"} mt={"10px"} justifyContent={"center"}>
                  <Button
                    px={"40px"}
                    onClick={() => {
                      setImages([]);
                      reset();
                      onClose();
                    }}
                  >
                    cancel
                  </Button>
                  <Button px={"40px"} bg={"brand.default"} color={"brand.baseColor"} type="submit">
                    Post
                  </Button>
                </Box>
              </VStack>
            </Grid>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
