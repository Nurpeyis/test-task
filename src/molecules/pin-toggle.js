import React from "react";
import styled from "styled-components";
import { Pin } from "../atoms/icons";

const Wrapper = styled.div`
  cursor: pointer;
  transition: transform 0.25s;
  margin-left: 10px;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    transform: rotate(45deg);
  }
`;

export const PinToggle = () => {
  return (
    <Wrapper>
      <Pin />
    </Wrapper>
  );
};
