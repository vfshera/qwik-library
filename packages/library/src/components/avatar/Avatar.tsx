import { component$, PropsOf } from "@builder.io/qwik";
import { cva, type VariantProps } from "class-variance-authority";

const styles = cva("", {
  variants: {
    withBorder: {
      true: "border-2",
      false: "",
    },
    size: {
      xs: "size-6",
      sm: "size-9",
      md: "size-12",
      lg: "size-[58px]",
      xl: "size-[74px]",
      xxl: "size-[110px]",
    },
    shape: {
      circular: "rounded-full",
      rounded: "rounded",
      square: "!rounded-none",
    },
  },
  compoundVariants: [
    {
      size: ["xs", "sm"],
      class: "rounded-md",
    },
    {
      size: ["md", "lg"],
      class: "rounded-lg",
    },
    {
      size: "xl",
      class: "rounded-xl",
    },
    {
      size: "xxl",
      class: "rounded-2xl",
    },
  ],
  defaultVariants: {
    withBorder: false,
    size: "md",
    shape: "square",
  },
});

export type AvatarProps = PropsOf<"img"> & VariantProps<typeof styles>;

export const Avatar = component$<AvatarProps>(
  ({
    size = "md",
    shape = "circular",
    withBorder = false,
    class: className,
    ...props
  }) => {
    return (
      <img
        {...props}
        class={[styles({ size, withBorder, shape }), className]}
      />
    );
  }
);
