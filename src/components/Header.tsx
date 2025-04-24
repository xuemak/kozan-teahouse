import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div>
        <Image
          src="/kozanlogo_fulltext.webp"
          alt="Kozan Tea House Full Text Logo"
          width={252}
          height={87}
        />
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
