import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export default function TrainerCard ({ trainer }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {trainer.first_name} {trainer.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Nivel: {trainer.level}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
}