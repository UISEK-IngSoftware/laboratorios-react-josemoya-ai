import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPokemon } from "../services/PokemonService";
import { Typography, Box, TextField, Button } from "@mui/material";
import Spinner from "../components/Spinner";

export default function PokemonForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const [pokemonData, setPokemonData] = useState({
        name: '',
        type: '',
        weight: '',
        height: '',
        picture: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "picture") {
            setPokemonData({...pokemonData, picture: files[0] });
        } else {
            setPokemonData({...pokemonData, [name]: value });
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newPokemon = await addPokemon(pokemonData);
            alert("Pokémon agregado exitosamente");
            console.log(newPokemon);
            navigate('/');
        } catch (error) {
            console.error("Error al agregar el Pokémon:", error);
            alert("Error al agregar el Pokémon");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Formulario de Pokemon.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Nombre" name="name" variant="outlined" onChange={handleChange} value={pokemonData.name} />
                <TextField label="Tipo" name="type" variant="outlined" onChange={handleChange} value={pokemonData.type} />
                <TextField label="Peso" name="weight" variant="outlined" onChange={handleChange} value={pokemonData.weight} />
                <TextField label="Altura" name="height" variant="outlined" onChange={handleChange} value={pokemonData.height} />
                <input type="file" name="picture" onChange={handleChange} />
                <Button variant="contained" type="submit">Guardar</Button>
            </Box>
        </>
    )
}