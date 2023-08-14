import React from "react";

const sizeClasses = {
  txtRobotoMedium18: "font-medium font-roboto",
  txtRobotoRegular14Bluegray60001: "font-normal font-roboto",
  txtRobotoRegular14Indigo200: "font-normal font-roboto",
  txtRobotoBlack26: "font-black font-roboto",
  txtRobotoMedium16Gray900: "font-medium font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoMedium50: "font-medium font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoMedium50Indigo900: "font-medium font-roboto",
  txtRobotoMedium36: "font-medium font-roboto",
  txtRobotoMedium14: "font-medium font-roboto",
  txtRobotoRegular16Indigo800: "font-normal font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
