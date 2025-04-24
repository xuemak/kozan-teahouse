import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="py-4"
      style={{
        background: '#864E95',
        backgroundImage:
          'linear-gradient(54deg, rgba(134, 78, 149, 1) 0%, rgba(178, 127, 156, 1) 26%, rgba(139, 82, 149, 1) 63%, rgba(152, 98, 152, 1) 78%, rgba(178, 127, 156, 1) 100%, rgba(134, 78, 149, 1) 100%)',
      }}
    >
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
