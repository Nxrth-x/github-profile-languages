import { MainHeader, IconContainer, InputContainer } from "./styles";
import { FaGithub } from "react-icons/fa";

function Header({ search }) {
  return (
    <MainHeader>
      <IconContainer>
        <FaGithub fontSize={32} />
        <h1>GitHunter</h1>
      </IconContainer>
      <InputContainer>
        <input
          type="text"
          placeholder="Search..."
          onBlur={({ target: { value } }) => {
            if (value.length >= 5) {
              search(value);
            }
          }}
        />
      </InputContainer>
    </MainHeader>
  );
}

export default Header;
