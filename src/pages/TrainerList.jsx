import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TrainerCard from '../components/TrainerCard'
import { fetchTrainers } from "../services/TrainerService";
import Spinner from "../components/Spinner";

export default function TrainerList() {

    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetchTrainers().then((data) => {
        setTrainers(data);
      }).catch((error) => {
        alert("Error obteniendo los entrenadores");
        console.error("Error obteniendo los entrenadores:", error);
      }).finally(() => setLoading(false));
    }, []);

    if (loading) {
      return <Spinner />;
    }

    return (
        <Grid container spacing={2} marginTop={2}>
          {trainers.map((trainer, index)=> (
            <Grid key={index} size= {{xs: 12, sm: 6, md: 4}}>
              <TrainerCard trainer={trainer} />
            </Grid>
          ))}
        </Grid>
    )
}