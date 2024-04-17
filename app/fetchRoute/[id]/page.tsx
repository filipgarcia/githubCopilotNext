'use client';
import { useState } from 'react';
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [dummy, setDummy] = useState<any>(null);

  console.log(params, 'params');
  console.log(params.id, 'params.id');
  console.log(typeof params.id, 'params.id type');

  const fetchPokemonData = async (): Promise<void> => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    router.push('/fetchRoute/pokemon');
    setPokemon(data);
    console.log(data.results, 'pokemon');
    console.log(params.id, 'params.id.fetchPokemonData');
  };

  const fetchDummyData = async (): Promise<void> => {
    const res = await fetch('https://dummyjson.com/products');
    router.push('/fetchRoute/dummyjson');
    const data = await res.json();
    setDummy(data);
    console.log(params.id, 'params.id.fetchDummyData');
    console.log(data, 'dummy json');
  };

  return (
    <>
      <button className="m-4 border p-4" onClick={fetchPokemonData}>
        pokemon
      </button>

      <button className="m-4 border p-4" onClick={fetchDummyData}>
        dummy
      </button>

      {dummy &&
        params.id === 'dummyjson' &&
        dummy.products.map((item: any) => (
          <div className="m-4 my-2 border p-2" key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div></div>
          </div>
        ))}

      <div>
        {pokemon &&
          params.id === 'pokemon' &&
          pokemon.results.map((item: any) => (
            <div key={item.name}>
              <div>{item.name}</div>
            </div>
          ))}
      </div>
    </>
  );
}
