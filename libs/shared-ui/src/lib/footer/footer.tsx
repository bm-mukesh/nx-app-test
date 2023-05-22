import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {text :string}

const StyledFooter = styled.div`
color: white;
background:blue;
width:100%;   
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <h1>  {props.text} Footer!</h1>
    </StyledFooter>
  );
}

export default Footer;
