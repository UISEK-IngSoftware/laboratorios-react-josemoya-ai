import axios from 'axios';

const Api_BASE_URL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

/**
 * Obtener la lista de entrenadores
 * @return
 */
export async function fetchTrainers() {
    const response = await axios.get(`${Api_BASE_URL}/trainers`);
    console.log(response);
    return response.data;
}


/**
 * Crear un nuevo Entrenador
 * @param {*} trainerData 
 * @returns 
 */
export async function addTrainer(trainerData) {
    const response = await axios.post(
        `${Api_BASE_URL}/trainers/`, 
        trainerData
    );
    return response.data;
}