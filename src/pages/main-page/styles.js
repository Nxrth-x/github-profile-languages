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
  display: flex;
  justify-content: center;
  border-right: 1px solid #f0f0f0;
  animation: fade-up 1s;

  div {
    width: 90%;
    img {
      width: 100%;
      border-radius: 50%;
      border: 1px solid #f0f0f0;
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
      border: 1px solid #f0f0f0;
      transition: ${styles.transition};
      &:hover {
        cursor: pointer;
        box-shadow: none;
        transform: translateY(2px);
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

  div.info {
    div {
      margin: 10px 0;
      display: flex;
      align-items: center;

      p {
        color: #555;
      }

      svg {
        color: #333;
      }
    }
  }

  @keyframes fade-up {
    from {
      transform: translateY(-25%);
      opacity: 0.8;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div`
  grid-area: content-container;
  padding: 0 20px;

  .languages {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    animation: fade 1s;
  }

  .repositories {
    animation: fade 1s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  text-align: center;
  margin: 5px;
  border: 1px solid #f0f0f0;
  padding: 10px 10px;
  background: #fafafa;
  font-family: sans-serif;
  font-size: 16px;
  color: #777;
  width: 128px;
  border-radius: 5px;
  font-weight: 300;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
  transition: all ease-in-out 250ms;
  animation: fade-in 500ms;

  &:hover {
    background: #f0f0f0;
    box-shadow: none;
    transform: translateY(1px);
  }

  @keyframes fade-in {
    from {
      transform: scale(0.5);
      opacity: 0.5;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Repository = styled.div`
  margin: 20px 0;
  padding: 10px 10px;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  color: #555;
  border-radius: 5px;
  background: #fefefe;

  h1 {
    font-size: 24px;
    color: #333;
    font-weight: 400;
  }

  button {
    margin-top: 10px;
    padding: 5px;
    font-size: 16px;
    color: #fff;
    background: #24292e;
    border: none;
    border-radius: 5px;
    transition: all ease-in-out 250ms;
    outline: none;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  h1 {
    font-weight: 400;
    font-size: 20px;
    margin: 0 20px 0 0;
    color: #555;
    cursor: pointer;
    margin-bottom: 6px;

    &.active {
      font-weight: 600;
    }
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  font-weight: 400;
  color: #24292e;
  text-align: center;
`;

export {
  MainContainer,
  Main,
  ProfileContainer,
  ContentContainer,
  Menu,
  Card,
  Repository,
  Title,
};
