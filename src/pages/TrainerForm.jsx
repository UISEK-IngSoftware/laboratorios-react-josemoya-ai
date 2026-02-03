import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTrainer } from "../services/TrainerService";
import { Typography, Box, TextField, Button } from "@mui/material";
import Spinner from "../components/Spinner";

export default function TrainerForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [trainerData, setTrainerData] = useState({
        first_name: '',
        last_name: '',
        level: 1,
        birth_date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrainerData({...trainerData, [name]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newTrainer = await addTrainer(trainerData);
            alert("Entrenador agregado exitosamente");
            console.log(newTrainer);
            navigate('/trainers');
        } catch (error) {
            console.error("Error al agregar el entrenador:", error);
            alert("Error al agregar el entrenador");
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
                Formulario de Entrenador.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Nombre" name="first_name" variant="outlined" onChange={handleChange} value={trainerData.first_name} />
                <TextField label="Apellido" name="last_name" variant="outlined" onChange={handleChange} value={trainerData.last_name} />
                <TextField label="Nivel" name="level" type="number" variant="outlined" onChange={handleChange} value={trainerData.level} />
                <TextField label="Fecha de Nacimiento" name="birth_date"  type="date" variant="outlined" onChange={handleChange} value={trainerData.birth_date} />
                <Button variant="contained" type="submit">Guardar</Button>
            </Box>
        </>
    )
}