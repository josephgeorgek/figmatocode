import React from "react";

import { Img, Text } from "components";
import SectionFeaturesMultiSeventyEightColumngroup4copy from "components/SectionFeaturesMultiSeventyEightColumngroup4copy";
import SectionFeaturesMultiSeventyEightElementcardin from "components/SectionFeaturesMultiSeventyEightElementcardin";

const SectionFeaturesMultiSeventyEightPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-roboto items-center justify-end mx-auto pt-[100px] md:px-10 sm:px-5 px-[100px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-start justify-start max-w-[1110px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[70px] items-center justify-start md:mt-0 mt-[60px] w-[47%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="leading-[48.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-full"
                size="txtRobotoMedium36"
              >
                Design & Build Your Own Landing Pages
              </Text>
              <Text
                className="leading-[26.00px] text-base text-indigo-300"
                size="txtRobotoRegular16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus <br />
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </>
              </Text>
            </div>
            <div className="sm:gap-5 gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {new Array(4).fill({}).map((props, index) => (
                <React.Fragment
                  key={`SectionFeaturesMultiSeventyEightElementcardin${index}`}
                >
                  <SectionFeaturesMultiSeventyEightElementcardin
                    className="flex flex-1 flex-col items-start justify-start pb-0.5 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <SectionFeaturesMultiSeventyEightColumngroup4copy className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full" />
        </div>
      </div>
    </>
  );
};

export default SectionFeaturesMultiSeventyEightPage;
