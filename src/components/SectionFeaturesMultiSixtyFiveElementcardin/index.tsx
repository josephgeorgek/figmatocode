import React from "react";

import { Img, Text } from "components";

type SectionFeaturesMultiSixtyFiveElementcardinProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "userlanguage" | "usertitle" | "usertitle1" | "userlanguage1"
> &
  Partial<{
    userlanguage: string;
    usertitle: string;
    usertitle1: string;
    userlanguage1: string;
  }>;

const SectionFeaturesMultiSixtyFiveElementcardin: React.FC<
  SectionFeaturesMultiSixtyFiveElementcardinProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="leading-[24.00px] mt-3 text-blue_gray-600_01 text-sm w-full"
          size="txtRobotoRegular14Bluegray60001"
        >
          {props?.userlanguage1}
        </Text>
        <Text
          className="mt-[23px] text-gray-900 text-lg"
          size="txtRobotoMedium18"
        >
          {props?.usertitle1}
        </Text>
        <Img className="h-12" src="defaultNoData.png" alt="elementcardin_One" />
        <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
          <Img
            className="h-12"
            src="defaultNoData.png"
            alt="elementcardin_One"
          />
          <Text
            className="mt-[23px] text-gray-900 text-lg"
            size="txtRobotoMedium18"
          >
            {props?.usertitle1}
          </Text>
          <Text
            className="leading-[24.00px] mt-3 text-blue_gray-600_01 text-sm w-full"
            size="txtRobotoRegular14Bluegray60001"
          >
            {props?.userlanguage1}
          </Text>
        </div>
      </div>
    </>
  );
};

SectionFeaturesMultiSixtyFiveElementcardin.defaultProps = {
  userlanguage:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  usertitle: "Title Goes Here",
  usertitle1: "Title Goes Here",
  userlanguage1:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
};

export default SectionFeaturesMultiSixtyFiveElementcardin;
