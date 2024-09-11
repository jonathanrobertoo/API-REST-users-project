import express from 'express';
import StatusCodes from 'http-status-codes';

const app = express();
const PORT = process.env.PORT || 8080;
let usuarios = [{
        id: 1,
        name: 'Jonathan Roberto',
        age: 29
    },
    {
        id: 2,
        name: 'Daniele Pavesi',
        age: 31
    }
];

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>');
});

app.get('/users', (req, res) => {
    return res.send(usuarios);
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = usuarios.find(usuario => {
        return (usuario.id === Number(userId))
    })
    return res.send(user);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    usuarios.push(newUser);
    return res.status(StatusCodes.CREATED).send(newUser);
})

app.put('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const updateUser = req.body;

    usuarios = usuarios.map(usuario => {
        if (Number(userId) === usuario.id) {
            return updateUser;
        }
        return usuario;
    });
    return res.send(updateUser);
});

app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;

    usuarios = usuarios.filter((usuario) => usuario.id !== Number(userId));

    return res.status(StatusCodes.NO_CONTENT).send();
})

// outra maneira
// app.delete('/users/:userId', (req, res) => {
//     const userId = req.params.userId;
//     const deleteUser = req.body;

//     usuarios = usuarios.map(usuario => {
//         if (Number(userId) === usuario.id) {
//             return deleteUser;
//         }
//         return usuario;
//     });
//     return res.send(deleteUser);
// });