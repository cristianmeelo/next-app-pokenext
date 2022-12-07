import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <p>
          <Image
            src="/public/images/pokeball.png"
            width={30}
            height={30}
            alt="Pokedex"
          />
        </p>
      </div>
      <h1>PokeNext</h1>
      <ul>
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

export default Navbar;
