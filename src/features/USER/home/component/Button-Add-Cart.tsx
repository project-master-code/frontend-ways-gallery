import { Button, Flex, Icon } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaCartPlus } from "react-icons/fa";
import { useAppDispatch } from "../../../../stores/stores";
import { PostCartAsync } from "../../../../stores/cart/async-cart";

export default function ButtonAddCart({ productId }: { productId: string }): React.ReactNode {
  const { handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  async function onAddCart() {
    const res = await dispatch(PostCartAsync({ productId }));
    alert("successfully added to cart");
  }

  return (
    <Flex as={"form"} width={"100%"} onSubmit={handleSubmit(() => onAddCart())}>
      <Button bg={"brand.active"} width={"100%"} type="submit">
        add to cart
        <Icon as={FaCartPlus} fontSize={"1.5em"}></Icon>
      </Button>
    </Flex>
  );
}
