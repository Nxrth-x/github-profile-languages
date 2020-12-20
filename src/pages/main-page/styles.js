import styled from "styled-components";
import styles from "../../util/styles";

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  width: 100%;
  margin-top: 20px;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-areas: "profile content-container";
`;

const ProfileContainer = styled.div`
  grid-area: profile;
  border-right: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  div {
    width: 90%;
    img {
      width: 100%;
      border-radius: 50%;
      border: 1px solid #e0e0e0;
    }

    h1 {
      color: #333;
      font-weight: 600;
    }

    p {
      color: #333;
      font-size: 16px;

      &.login {
        font-weight: 300;
        margin-top: -5px;
        font-size: 20px;
        color: #777;
        margin-bottom: 10px;
      }
    }

    button {
      margin: 10px 0;
      font-size: 16px;
      width: 100%;
      border-radius: 10px;
      color: #555;
      padding: 5px 0;
      outline: none;
      background: #fafafa;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
      border: 1px solid #d0d0d0;
      transition: ${styles.transition};

      &:hover {
        cursor: pointer;
        background: #f7f7f7;
      }
    }

    div.followers {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 14px;
      }

      svg {
        color: #555;
      }
    }
  }
`;

const ContentContainer = styled.div`
  grid-area: content-container;
  margin: 0 20px;
`;

export { MainContainer, Main, ProfileContainer, ContentContainer };
