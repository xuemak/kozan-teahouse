import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-purple-200 fixed w-full">
      <div className="flex flex-wrap items-center justify-center p-4">
        <div className="overflow-x-auto">
          <ul className="flex p-0 font-medium bg-purple-200 space-x-8 whitespace-nowrap">
            <li>
              <Link href="#milk-tea">Milk Tea</Link>
            </li>
            <li>
              <Link href="#smoothies">Smoothies</Link>
            </li>
            <li>
              <Link href="#refreshers">Refreshers</Link>
            </li>
            <li>
              <Link href="#oreo-brulee">Oreo Brûlée</Link>
            </li>
            <li>
              <Link href="#matcha">Matcha</Link>
            </li>
            <li>
              <Link href="#coffee">Coffee</Link>
            </li>
            <li>
              <Link href="#milk">Milk</Link>
            </li>
            <li>
              <Link href="#cheese-foam">Cheese Foam</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
