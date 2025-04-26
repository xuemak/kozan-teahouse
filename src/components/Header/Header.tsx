'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const openNewTab = () => {
    window.open('', '_blank');
  };

  return (
    <header
      className="py-6"
      style={{
        background: '#864E95',
        backgroundImage:
          'linear-gradient(54deg, rgba(134, 78, 149, 1) 0%, rgba(178, 127, 156, 1) 26%, rgba(139, 82, 149, 1) 63%, rgba(152, 98, 152, 1) 78%, rgba(178, 127, 156, 1) 100%, rgba(134, 78, 149, 1) 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '930px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-grow flex flex-col items-center">
            <Image
              src="/kozanlogo_fulltext.webp"
              alt="Kozan Tea House Full Text Logo"
              width={252}
              height={87}
            />
            <ul className="flex space-x-7 mt-5 uppercase font-bold tracking-wider">
              <li>
                <Link
                  href="https://www.instagram.com/kozanteahouse/?hl=en"
                  className={styles.animatedUnderline}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://squareup.com/gift/E2SHH2PPB06TF/order"
                  className={styles.animatedUnderline}
                >
                  E-Gift Card
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute top-0 right-0 flex space-x-4">
            <button
              className={`${styles.buttonIcon} mx-2 cursor-pointer`}
              onClick={openNewTab}
            >
              <Image
                src="/user_icon.png"
                alt="user icon"
                width={25}
                height={25}
              />
            </button>
            <button
              className={`${styles.buttonIcon} mx-2 cursor-pointer`}
              onClick={openNewTab}
            >
              <Image src="/cart.png" alt="cart icon" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
