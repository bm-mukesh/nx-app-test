
'use client';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../state';

type FbHeaderProps = {
    onClick: () => void;
};

const FlowbiteHeader: React.FC<FbHeaderProps> = ({ onClick }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.idToken !== null ? true : false);
    // export default function FlowbiteHeader() {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    alt="BM2.0"
                    className="mr-3 h-6 sm:h-9"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link active href="#" > <p> Home </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
            {isLoggedIn
                ?
                <div className="flex md:order-2">
                    <Dropdown
                        inline
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={onClick}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                :
                <Navbar.Link href="/login">
                    Login
                </Navbar.Link>
            }
        </Navbar>
    )
}

export default FlowbiteHeader
