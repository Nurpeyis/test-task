import React from "react";
import styled from "styled-components";
import { PinnedText, Tools } from "../molecules";

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const Header = ({ children }) => {
  return (
    <HeaderWrap>
      <PinnedText />
      <Tools />
    </HeaderWrap>
  );
};
