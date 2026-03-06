import express from 'express';

const app = express(); // aqui creo una instancia para express
const PORT = 3000; // aqui declaro el puerto para el servidor

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

// Aqui le pido al servidor que escuche por el puerto indicado la petición
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});