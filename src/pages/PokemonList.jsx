import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import PokemonCard from '../components/PokemonCard'
import { fetchPokemons } from "../services/PokemonService";
import Spinner from "../components/Spinner";

export default function PokemonList() {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetchPokemons().then((data) => {
        setPokemons(data);
      }).catch((error) => {
        alert("Error obteniendo los pokemons");
        console.error("Error obteniendo los pokemons:", error);
      }).finally(() => setLoading(false));
    }, []);

    if (loading) {
      return <Spinner />;
    }

    return (
        <Grid container spacing={2} marginTop={2}>
          {pokemons.map((pokemon, index)=> (
            <Grid key={index} size= {{xs: 12, sm: 6, md: 4}}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
    )
}