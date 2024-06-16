import React from "react";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
} from "react-icons/tb";

export const FIRST_PLACE = "firstPlace";
export const SECOND_PLACE = "secondPlace";
export const THIRD_PLACE = "thirdPlace";

export const positionIcons = {
  firstPlace: <TbHexagonNumber1 size={60} fill="gold" />,
  secondPlace: <TbHexagonNumber2 size={60} fill="silver" />,
  thirdPlace: <TbHexagonNumber3 size={60} fill="#bd371c" />,
};
