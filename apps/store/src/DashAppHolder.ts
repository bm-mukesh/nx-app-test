import styled from 'styled-components';
// import { palette, font } from 'styled-theming';

const DashAppHolder = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {
    &::selection {
      color: #fff;
    }
  }

  .ant-row:not(.ant-form-item) {
    ${
      '' /* margin-left: -8px;
    margin-right: -8px; */
    };
    &:before,
    &:after {
      display: none;
    }
  }
 
`;

export default DashAppHolder;
