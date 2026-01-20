import { AppBar, Container, Toolbar, Button } from "@mui/material";
import pokedexLogo from "../assets/pokedex-logo.png";
import { logout } from "../services/authService";
import './Header.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const isLoggedIn = localStorage.getItem('access_token') !== null;
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        alert("Cierre de sesión exitoso");
        navigate('/');
    };

    return (
        <header className="pokedex-navbar">

            <AppBar position="static">
                <Toolbar>
                    <div className="image-container">
                        <img src={pokedexLogo} alt="Pokédex Logo" height={100} />
                    </div>
                </Toolbar>
                <Toolbar>
                    <Button color="inherit" href="/">Inicio</Button>
                    <Button color="inherit" href="/trainers">Entrenadores</Button>
                    {isLoggedIn && 
                        <>
                            <Button color="inherit" href="/add-pokemon">Agregar Pokémon</Button>
                            <Button color="inherit" href="/add-trainer">Agregar Entrenador</Button>
                            <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
                        </>
                    }
                    {!isLoggedIn && <Button color="inherit" href="/login">Iniciar Sesión</Button>}
                </Toolbar>
            </AppBar>

        </header>
    )
}