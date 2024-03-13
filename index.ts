import app from './src/app';

const port = process.env.PORT || 4400

app.listen(port, () => {
  console.log(`Servidor ligado http://localhost:${port}`)
})