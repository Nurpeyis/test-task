import React from "react";
import styled from "styled-components";
import { CloseX } from "../atoms/icons";
import { CircledIcon } from "../atoms";
import { PinToggle } from "./pin-toggle";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrap = styled.div`
  margin: 0 10px;
`;

const TextLable = styled.span`
  opacity: 0.7;
  color: white;
  font-family: "Proza Libre", sans-serif;
`;

const SummText = styled.span`
  color: #f7de70;
  margin-left: 5px;
  font-family: "Literata", serif;

  &:before {
    content: "$";
    margin-right: 5px;
  }
`;

export const PinnedText = () => {
  return (
    <Wrapper>
      <CircledIcon style={{ opacity: 0.7 }} stroke={true}>
        <CloseX />
      </CircledIcon>
      <TextWrap>
        <TextLable>Original spirit Roulette</TextLable>
        <SummText>1 - 3 000</SummText>
      </TextWrap>
      <PinToggle />
    </Wrapper>
  );
};
