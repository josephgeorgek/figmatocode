import React from "react";

import { Button, Img, Line, Text } from "components";

const LandingPageTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[164px] items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start md:px-5 w-[89%] md:w-full">
          <div className="md:h-[1108px] h-[1112px] ml-0.5 md:ml-[0] relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-3 right-[0] w-[81%]"
              style={{ backgroundImage: "url('images/img_group6.png')" }}
            >
              <div className="flex flex-col items-center justify-end mb-[1050px] md:ml-[0] ml-[251px]">
                <Text
                  className="mt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-800"
                  size="txtRobotoBlack26"
                >
                  Landing
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[27%] w-[43%]">
              <div className="flex flex-col md:gap-10 gap-[69px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="leading-[66.00px] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900 tracking-[1.00px] w-full"
                    size="txtRobotoMedium50"
                  >
                    Introduce Your Product Quickly & Effectively
                  </Text>
                  <Text
                    className="leading-[30.00px] text-blue_gray-600 text-lg"
                    size="txtRobotoRegular18"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus <br />
                      mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim.
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start w-[76%] md:w-full">
                  <div className="h-9 relative w-[47%] sm:w-full">
                    <div className="bg-blue_gray-900 h-9 m-auto rounded-sm w-full"></div>
                    <Text
                      className="absolute inset-x-[0] mx-auto text-base text-center text-white-A700 top-[19%] w-max"
                      size="txtRobotoMedium16"
                    >
                      Purchase UI Kit
                    </Text>
                  </div>
                  <div className="h-9 relative w-[47%] sm:w-full">
                    <div className="border-2 border-gray-900 border-solid h-9 m-auto rounded-sm w-full"></div>
                    <a
                      href="javascript:"
                      className="absolute bottom-[19%] inset-x-[0] mx-auto text-base text-center text-gray-900 w-max"
                    >
                      <Text size="txtRobotoMedium16Gray900">Learn More</Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row md:gap-10 items-start justify-between left-[0] top-[2%] w-[87%]">
              <div className="flex flex-row items-center justify-between sm:mt-0 mt-[3px] w-[23%] sm:w-full">
                <Text
                  className="text-blue_gray-600 text-sm"
                  size="txtRobotoRegular14"
                >
                  Home
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm"
                  size="txtRobotoRegular14"
                >
                  About
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm"
                  size="txtRobotoRegular14"
                >
                  Contact
                </Text>
              </div>
              <Button className="bg-blue_gray-900 cursor-pointer font-medium min-w-[160px] py-[5px] rounded-sm text-center text-white-A700 text-xs">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[107px] w-[87%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex flex-col md:gap-10 gap-20 items-center justify-start">
                <div className="flex flex-col gap-4 items-start justify-start pt-1 w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtRobotoMedium36"
                  >
                    Light, Fast & Powerful
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-indigo-300"
                    size="txtRobotoRegular16"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus <br />
                      mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim.
                    </>
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col items-start justify-start pb-0.5 w-[48%] sm:w-full">
                    <Img
                      className="h-9"
                      src="images/img_elementcardin.svg"
                      alt="elementcardin"
                    />
                    <Text
                      className="mt-4 text-base text-gray-900"
                      size="txtRobotoMedium16Gray900"
                    >
                      Title Goes Here
                    </Text>
                    <Text
                      className="leading-[18.00px] mt-2.5 text-blue_gray-600_01 text-xs w-full"
                      size="txtRobotoRegular12"
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.{" "}
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-start justify-start pb-0.5 w-[48%] sm:w-full">
                    <Img
                      className="h-9"
                      src="images/img_elementcardin.svg"
                      alt="elementcardin_One"
                    />
                    <Text
                      className="mt-4 text-base text-gray-900"
                      size="txtRobotoMedium16Gray900"
                    >
                      Title Goes Here
                    </Text>
                    <Text
                      className="leading-[18.00px] mt-2.5 text-blue_gray-600_01 text-xs w-full"
                      size="txtRobotoRegular12"
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor.{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[524px]"
                src="images/img_undrawmobileloginikmv.svg"
                alt="undrawmobilelog"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[30px] mt-[230px] w-[85%] md:w-full">
            <Img
              className="h-[315px]"
              src="images/img_undrawhappynewshxmt.svg"
              alt="undrawhappynews"
            />
            <div className="flex flex-col gap-4 items-start justify-start pt-1">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                size="txtRobotoMedium36"
              >
                Light, Fast & Powerful
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
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[222px] w-[87%] md:w-full">
            <Img
              className="h-[387px]"
              src="images/img_undrawsocialinfluencersgsv.svg"
              alt="undrawsocialinf"
            />
            <div className="flex flex-col gap-4 items-start justify-start pt-1">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                size="txtRobotoMedium36"
              >
                Light, Fast & Powerful
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
          </div>
          <div className="flex flex-col items-center justify-start ml-12 md:ml-[0] mt-[232px] w-[84%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[312px]"
                src="images/img_undrawmention6k5d.svg"
                alt="undrawmention6k"
              />
              <div className="flex flex-col gap-10 items-start justify-start">
                <div className="flex flex-col gap-4 items-start justify-start pt-1 w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtRobotoMedium36"
                  >
                    Light, Fast & Powerful
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-indigo-300"
                    size="txtRobotoRegular16"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus <br />
                      mus. Donec quam felis, ultricies nec, pellentesque eu,
                      pretium quis, sem. Nulla consequat massa quis enim.
                    </>
                  </Text>
                </div>
                <Button className="bg-blue_gray-900 cursor-pointer font-medium min-w-[150px] py-[7px] rounded-sm text-center text-sm text-white-A700">
                  Purchase Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="h-[1020px] md:h-[932px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[938px] inset-x-[0] items-center justify-start mx-auto p-[237px] md:px-10 sm:px-5 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_pricing.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[67px] w-[63%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start pt-[5px] w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                    size="txtRobotoMedium36"
                  >
                    A Price To Suit Everyone
                  </Text>
                  <Text
                    className="leading-[26.00px] text-base text-center text-indigo-300 w-full"
                    size="txtRobotoRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus{" "}
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start mt-[43px]">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-indigo-900 tracking-[1.00px]"
                    size="txtRobotoMedium50Indigo900"
                  >
                    $40
                  </Text>
                  <Text
                    className="text-base text-center text-indigo-800"
                    size="txtRobotoRegular16Indigo800"
                  >
                    UI Design Kit
                  </Text>
                </div>
                <Text
                  className="mt-[67px] text-blue_gray-600_01 text-center text-sm"
                  size="txtRobotoRegular14Bluegray60001"
                >
                  See, One price. Simple.
                </Text>
                <Button className="bg-blue_gray-900 cursor-pointer font-medium min-w-[189px] mt-[11px] py-[7px] rounded-sm text-center text-sm text-white-A700">
                  Purchase Now
                </Button>
              </div>
            </div>
            <div className="absolute bg-blue-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[35px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-[25px] w-[82%] md:w-full">
                <div className="flex flex-row items-end justify-between w-full">
                  <Text
                    className="my-2.5 text-blue_gray-300 text-sm"
                    size="txtRobotoMedium14"
                  >
                    ©2023 Yourcompany
                  </Text>
                  <div className="flex flex-col items-center justify-end">
                    <Text
                      className="mt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-800"
                      size="txtRobotoBlack26"
                    >
                      Landing
                    </Text>
                  </div>
                  <Button className="bg-blue_gray-900 cursor-pointer font-medium min-w-[109px] my-1.5 py-[5px] rounded-sm text-center text-white-A700 text-xs">
                    Purchase now
                  </Button>
                </div>
                <Line className="bg-blue_gray-100 h-px mt-10 w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[23px] w-full">
                  <div className="flex md:flex-1 flex-row items-center justify-between w-[23%] md:w-full">
                    <Text
                      className="text-indigo-200 text-sm"
                      size="txtRobotoRegular14Indigo200"
                    >
                      Home
                    </Text>
                    <Text
                      className="text-indigo-200 text-sm"
                      size="txtRobotoRegular14Indigo200"
                    >
                      About
                    </Text>
                    <Text
                      className="text-indigo-200 text-sm"
                      size="txtRobotoRegular14Indigo200"
                    >
                      Contact
                    </Text>
                  </div>
                  <Img
                    className="h-4 md:ml-[0] ml-[665px] w-4"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-4 md:ml-[0] ml-[30px] w-4"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Img
                    className="h-4 md:ml-[0] ml-[30px] w-4"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-4 md:ml-[0] ml-[30px] w-4"
                    src="images/img_iconsocialinstagram.svg"
                    alt="iconsocialinsta"
                  />
                  <Img
                    className="h-4 md:ml-[0] ml-[30px] w-4"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageTwoPage;
