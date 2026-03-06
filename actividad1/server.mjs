import express from 'express';

const app = express(); // aqui declaro una instancia para express
const PORT = 3000; // aqui declaro el puerto para el servidor

// Ruta GET con parámetro de ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Aqui le pido al servidor que escuche por el puerto indicado anteriormente
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});