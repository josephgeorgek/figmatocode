import React from "react";

import { Img } from "components";

type SectionFeaturesMultiSeventyEightColumngroup4copyProps =
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > &
    Partial<{}>;

const SectionFeaturesMultiSeventyEightColumngroup4copy: React.FC<
  SectionFeaturesMultiSeventyEightColumngroup4copyProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1031px] sm:h-[3117px] relative w-full">
            <div className="h-[1031px] sm:h-[3117px] m-auto w-full">
              <div className="h-[1031px] sm:h-[3117px] m-auto w-full">
                <div className="absolute bg-gray-200_02 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto pb-1.5 rounded-bl-[75px] rounded-br-[75px] rounded-tl-[70px] rounded-tr-[70px] shadow-bs w-[99%]">
                  <Img
                    className="h-[1024px] rounded-bl-[75px] rounded-br-[75px] rounded-tl-[70px] rounded-tr-[70px]"
                    src="images/img_group4copy.svg"
                    alt="group4copy"
                  />
                  <div className="bg-white-A700_79 h-[7px] mb-[1016px] sm:ml-[0] ml-[145px] w-1.5"></div>
                  <div className="flex flex-col md:gap-10 gap-[971px] items-end justify-start sm:ml-[0] ml-[267px] rounded-bl-[75px] rounded-br-[75px] rounded-tl-[70px] rounded-tr-[70px] w-[7%] sm:w-full">
                    <Img
                      className="h-[26px] mr-[3px] rounded-bl-[75px] rounded-br-[75px] rounded-tl-[70px] rounded-tr-[70px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <Img
                      className="h-[27px] rounded-bl-[75px] rounded-br-[75px] rounded-tl-[70px] rounded-tr-[70px] w-7"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[262px] inset-x-[0] mx-auto top-[17%]"
                  src="images/img_buttons.svg"
                  alt="buttons"
                />
              </div>
              <div className="absolute bg-black-900_01 md:h-[1007px] h-[1015px] inset-[0] justify-center m-auto outline outline-[2px] outline-gray-200_03 rounded-bl-[67px] rounded-br-[67px] rounded-tl-[62px] rounded-tr-[62px] shadow-bs1 w-[98%] sm:w-full">
                <div className="absolute bg-black-900 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[58px] w-[98%]">
                  <Img
                    className="h-[978px] md:h-auto object-cover rounded-[58px] w-full"
                    src="images/img_replacethis.png"
                    alt="replacethis"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-[25px] sm:px-5 w-[98%]"
                  style={{ backgroundImage: "url('images/img_group4.svg')" }}
                >
                  <div className="bg-black-900 flex flex-col items-center justify-end mb-[925px] p-[5px] rounded-[17px] w-[19%] md:w-full">
                    <Img
                      className="h-[22px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-black-900_2f bottom-[0] h-[7px] right-[15%] w-[2%]"></div>
            <div className="absolute bg-black-900_2f bottom-[0] h-[7px] left-[15%] w-[2%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

SectionFeaturesMultiSeventyEightColumngroup4copy.defaultProps = {};

export default SectionFeaturesMultiSeventyEightColumngroup4copy;
