import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

const pokedexIcon: string = require("../public/images/pokeball.png").default;

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
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image src={pokedexIcon} width={50} height={50} alt="Pokedex" />
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon: any) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
