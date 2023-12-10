import styled from "styled-components";
import Cabin from "../data/img/cabin.avif";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  border-radius: 50%;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={Cabin} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
