import { MainHeader, IconContainer, InputContainer } from "./styles";
import { FaGithub, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <MainHeader>
      <IconContainer>
        <FaGithub fontSize={32} />
        <h1>GitHunter</h1>
      </IconContainer>
      <InputContainer>
        <input type="text" placeholder="Search" />
        <FaSearch fontSize={16} />
      </InputContainer>
    </MainHeader>
  );
}

export default Header;
