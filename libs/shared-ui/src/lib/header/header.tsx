import styled from 'styled-components';
/* eslint-disable-next-line */
export interface HeaderProps {text :string}

const StyledHeader = styled.div`
  color: white;
  background:red;
  width:100%;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <header>
        <h1> {props.text} Header!</h1>
      </header>
    </StyledHeader>
  );
}

export default Header;
