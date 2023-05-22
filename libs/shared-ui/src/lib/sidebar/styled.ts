import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 200px;
  background: #cccccc;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;
export const SidebarUl = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #cccccc;
  li {
    list-style: none;
    a {
      display: block;
      padding: 10px 8px;
      background: white;
      margin-bottom: 4px;
    }
  }
`;
