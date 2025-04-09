import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-purple-200 fixed w-full">
            <div className="flex flex-wrap items-center justify-center p-4">
            <div>
                <ul className="flex p-0 font-medium bg-purple-200 space-x-8">
                    <li>
                        <a href="#">Milk Tea</a>
                    </li>
                    <li>
                        <a href="#">Smoothies</a>
                    </li>
                    <li>
                        <a href="#">Refreshers</a>
                    </li>
                    <li>
                        <a href="#">Oreo Brûlée</a>
                    </li>
                    <li>
                        <a href="#">Matcha</a>
                    </li>
                    <li>
                        <a href="#">Coffee</a>
                    </li>
                    <li>
                        <a href="#">Milk</a>
                    </li>
                    <li>
                        <a href="#">Cheese Foam</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
