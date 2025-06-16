import express from "express";
const app = express()
const port = 3000

const products = [
  {
    id: 1,
    nombre: "Camiseta Negra",
    descripcion: "Camiseta de algodón 100% con estampado frontal",
    precio: 4999,
    stock: 10,
    categoria: "Ropa",
    imagen: "https://ejemplo.com/img/camiseta-negra.jpg"
  },
  {
    id: 2,
    nombre: "Zapatillas Urbanas",
    descripcion: "Zapatillas deportivas para uso diario",
    precio: 14999,
    stock: 5,
    categoria: "Calzado",
    imagen: "https://ejemplo.com/img/zapatillas-urbanas.jpg"
  },
  {
    id: 3,
    nombre: "Mochila Outdoor",
    descripcion: "Mochila resistente al agua con múltiples compartimentos",
    precio: 8999,
    stock: 8,
    categoria: "Accesorios",
    imagen: "https://ejemplo.com/img/mochila.jpg"
  }
];


app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo!</h1>')
})

app.get('/products', (req, res) => {
   res.json(products) //se usa el .json para avisar al navegador que estamos enviando un json, se puede usar el .send, pero siempre es bueno avisar que estamos enviando
})

app.get('/products/:id', (req, res) => {
    const product = products.find((item) => item.id == req.params.id)
   res.send(product || "no se encontro el producto")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})