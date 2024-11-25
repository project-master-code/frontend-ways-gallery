import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { detailInputForm, InputFormTypes } from "../types/input-form-types";

export default function InputForm({ ElementDetails, registerHook, errors }: InputFormTypes): React.ReactNode {
  return ElementDetails.map((detail: detailInputForm, index) => {
    return (
      <FormControl key={index} isInvalid={errors[detail.inputName] !== undefined}>
        <Input
          type={detail.type}
          placeholder={detail.placeHolder}
          {...registerHook(detail.inputName)}
          border={"1px solid"}
          borderColor={"brand.default"}
          color={"brand.black"}
          placeContent="sf"
        ></Input>
        {errors[detail.inputName] && <FormErrorMessage>{errors[detail.inputName].message}</FormErrorMessage>}
      </FormControl>
    );
  });
}
