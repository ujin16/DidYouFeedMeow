import styled from "styled-components";

export const ModalMain = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.5);
  z-index: 100;
`;

export const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalWrap = styled.div`
  box-sizing: border-box;
  width: 300px;
  border-radius: 55px;
  overflow: hidden;
  background-color: var(--background-color);
`;
