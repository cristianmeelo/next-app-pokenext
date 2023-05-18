interface Pokemon {
  pokemon: {
    id: string;
    name: string;
    types: [{ type: { name: string } }, { type: { name: string } }];
    height: number;
    weight: number;
  };
}

type Ipokemons = {
  pokemons: {
    map(arg0: (pokemon: Ipokemon) => JSX.Element): import('react').ReactNode;
    id: string;
    name: string;
  };
};

interface LayoutProps {
  children: ReactNode;
}
