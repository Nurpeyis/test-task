import React from "react";
import styled, { css } from "styled-components";

const CircleFrame = styled.div`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  border: 1px solid ${({ color }) => color || "white"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  transition: 0.25s;

  &:hover {
    background-color: white;
    color: black;

    svg,
    svg * {
      stroke: ${({ stroke }) => stroke && "#000"};
      fill: ${({ fill }) => fill && "#000"};
      ${({ stroke, fill }) =>
        !stroke &&
        !fill &&
        css`
          fill: #000;
        `}
    }
  }

  svg {
    flex: 1;
  }
`;

export const CircledIcon = ({ children, ...props }) => {
  return <CircleFrame {...props}>{children}</CircleFrame>;
};
