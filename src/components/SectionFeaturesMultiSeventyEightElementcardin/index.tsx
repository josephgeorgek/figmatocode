import React from "react";

import { Img, Text } from "components";

type SectionFeaturesMultiSeventyEightElementcardinProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "language"
> &
  Partial<{ title: string; language: string }>;

const SectionFeaturesMultiSeventyEightElementcardin: React.FC<
  SectionFeaturesMultiSeventyEightElementcardinProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-9"
          src="images/img_elementcardin.svg"
          alt="elementcardin"
        />
        <Text
          className="mt-4 text-base text-gray-900"
          size="txtRobotoMedium16Gray900"
        >
          {props?.title}
        </Text>
        <Text
          className="leading-[18.00px] mt-2.5 text-blue_gray-600_01 text-xs w-full"
          size="txtRobotoRegular12"
        >
          {props?.language}
        </Text>
      </div>
    </>
  );
};

SectionFeaturesMultiSeventyEightElementcardin.defaultProps = {
  title: "Title Goes Here",
  language:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
};

export default SectionFeaturesMultiSeventyEightElementcardin;
