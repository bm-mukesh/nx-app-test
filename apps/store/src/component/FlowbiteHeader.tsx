/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';

export function FlowbiteHeader() {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
                {/* <img
                    alt="Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active href="/" >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="/institutes">
                    <p>
                        institutes
                    </p>
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
        </Navbar>
    )
}
export default FlowbiteHeader