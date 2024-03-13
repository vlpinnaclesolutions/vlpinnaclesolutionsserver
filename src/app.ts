import cors from 'cors';
import express, { Request, Response } from 'express';
import Rotas from './routes/routes';

const app = express();

app.use(express.json());
app.use(cors())

//ROTA PARA REI DAS FEIRAS
app.use('/cli', Rotas)

app.get('/', (req, res) => {
  res.json({
      message: "👋🌎 Bem vindo, Innacle Solutions no ar! 👋🌎"
  })
})

export default app;
