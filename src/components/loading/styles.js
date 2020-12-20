import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  background: rgba(36, 41, 42, 0.75);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalBody = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
`;

export { Modal, ModalBody };
