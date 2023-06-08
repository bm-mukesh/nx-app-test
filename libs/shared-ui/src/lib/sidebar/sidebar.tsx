import { Link } from 'react-router-dom';
import {SidebarWrapper, SidebarUl} from './styled';

/* eslint-disable-next-line */
export interface SidebarProps {
  text:string
}

export function Sidebar(props: SidebarProps) {
  return (
    <SidebarWrapper>
      <div>
        {props.text}Sidebar
      </div>
       <SidebarUl>
        <li><a>Dashboard</a></li>
        <li><a>Classroom</a></li>
        <li><a>Study Material</a></li>
        <li><a>TestPro</a></li>
        <li><a>Users</a></li>
        <li><a>Institute Setup</a></li>
        <li><a>Website management</a></li>
        <li><a>Fee management</a></li>
       </SidebarUl>
    </SidebarWrapper>
  );
}

export default Sidebar;