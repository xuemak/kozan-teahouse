import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <ul>
        <li>
          <Link href="https://www.instagram.com/kozanteahouse/?hl=en">
            Instagram
          </Link>
        </li>
        <li>
          <Link href="https://squareup.com/gift/E2SHH2PPB06TF/order">
            E-Gift Card
          </Link>
        </li>
      </ul>
      <div>
        <button>Profile</button>
        <button>Cart</button>
      </div>
    </header>
  );
}
