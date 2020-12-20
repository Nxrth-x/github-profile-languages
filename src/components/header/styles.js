import styled from "styled-components";
import styles from "../../util/styles";

const MainHeader = styled.header`
  width: 100vw;
  padding: 10px 5vw;
  background: #24292e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.125);
  z-index: 999;

  svg {
    color: #fff;
    transition: ${styles.transition};
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    color: #fff;
  }
`;

const InputContainer = styled.div`
  background: #24292e;
  border-radius: 5px;
  ${styles.flexboxCenter}

  input {
    background: #24292e;
    color: #777;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 4px 10px;
    outline: none;
    transition: ${styles.transition};

    &:hover,
    &:focus {
      background: #fff;
    }
  }

  svg {
    margin: 0 5px;
  }
`;

export { MainHeader, IconContainer, InputContainer };
