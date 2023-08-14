import React from "react";

import { Img, Text } from "components";

type SectionFeaturesMultiEightyElementcardinProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "title" | "language"
> &
  Partial<{ title: string; language: string }>;

const SectionFeaturesMultiEightyElementcardin: React.FC<
  SectionFeaturesMultiEightyElementcardinProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-start w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-[67%] md:w-full">
            <Img className="h-9 w-9" src="defaultNoData.png" alt="trash" />
            <Text
              className="text-base text-gray-900"
              size="txtRobotoMedium16Gray900"
            >
              {props?.title}
            </Text>
          </div>
          <Text
            className="leading-[18.00px] md:ml-[0] ml-[52px] text-blue_gray-600_01 text-xs w-[79%] sm:w-full"
            size="txtRobotoRegular12"
          >
            {props?.language}
          </Text>
        </div>
      </div>
    </>
  );
};

SectionFeaturesMultiEightyElementcardin.defaultProps = {
  title: "Title Goes Here",
  language:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
};

export default SectionFeaturesMultiEightyElementcardin;
