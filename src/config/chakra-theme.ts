import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const BrandConfig: ThemeOverride = {
  colors: {
    brand: {
      baseColor: "white",
      black: "black",

      background: "white",
      default: "#2FC4B2",
      youngGrey: "#E7E7E7",

      borderColorInvalid: "red",
      succes: "#56C05A",
      warning: "#FFB000",
      danger: "red",
    },
  },
};

export const ThemeConfig = extendTheme(BrandConfig satisfies ThemeOverride);
