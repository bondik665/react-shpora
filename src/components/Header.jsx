import { styled } from "styled-components";

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
 
`;

const UlContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <UlContainer>
          <li> пункт1</li>
          <li> пункт1</li>
          <li> пункт1</li>
        </UlContainer>
      </HeaderContainer>
    </>
  );
}
