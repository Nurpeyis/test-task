import React from "react";
import styled from "styled-components";
import { CircledIcon } from "../atoms";
import {
  ChatBubble,
  VideoCamera,
  Sound,
  Settings,
  Time,
  ChatFAQ,
  Resize
} from "../atoms/icons";

const ToolsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Tool = styled.div`
  margin-right: 8px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const Tools = () => {
  return (
    <ToolsWrap>
      <Tool>
        <CircledIcon>
          <ChatBubble />
        </CircledIcon>
      </Tool>
      <Tool>
        <CircledIcon>
          <VideoCamera />
        </CircledIcon>
      </Tool>
      <Tool>
        <CircledIcon>
          <Sound />
        </CircledIcon>
      </Tool>
      <Tool>
        <CircledIcon>
          <Settings />
        </CircledIcon>
      </Tool>
      <Tool>
        <CircledIcon>
          <Time />
        </CircledIcon>
      </Tool>
      <Tool>
        <CircledIcon>
          <ChatFAQ />
        </CircledIcon>
      </Tool>
      <Tool>
        <CircledIcon>
          <Resize stroke={true} fill={true} />
        </CircledIcon>
      </Tool>
    </ToolsWrap>
  );
};
