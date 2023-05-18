import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../styles/Navbar.module.css';

const pokedexIcon: string = require('../public/images/pokeball.png').default;

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={pokedexIcon} width={30} height={30} alt="Pokedex" />
        <h1>PokeNext</h1>
      </div>

      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <p>Sobre</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
