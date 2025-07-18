import "dotenv/config"
import express from "express";
import cors from "cors";
import productsRoutes from "./src/routes/products.routes.js"
import authRouter from "./src/routes/auth.routes.js";

const app = express()
const port = 3000

// leer las rutas para detectar error en postman
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

app.use(express.json()) // para poder leer el body de la req
app.use(cors())

app.use("/api", productsRoutes)
app.use("/api/auth", authRouter);

app.get('/', (req, res) => {
  res.send('<h1>Proyecto Node.js - Cristian Robles - Talento Tech</h1>')
})

const PORT = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})