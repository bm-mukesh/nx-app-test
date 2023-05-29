import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  text :string
}

const StyledBanner = styled.div`
  color: pink;
`;

export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <h1>{props.text}</h1>
      <small>this is Banner lib from common-ui REPO - nx-app-test</small>
    </StyledBanner>
  );
}

export default Banner;
