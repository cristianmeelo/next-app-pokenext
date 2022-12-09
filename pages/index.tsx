import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type Ipokemons = {
  pokemons: {
    map(arg0: (pokemon: Ipokemon) => JSX.Element): import("react").ReactNode;
    id: string;
    name: string;
  };
};

type Ipokemon = {
    id: string;
    name: string;
};

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon index
  data.results.forEach((item: { id: string }, index: string) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }: Ipokemons) {
  return (
    <div>
      <ul>
        {pokemons.map((pokemon: Ipokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
