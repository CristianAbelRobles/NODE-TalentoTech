# 🛒 API de Productos - Proyecto Final Node.js

Este es un proyecto backend desarrollado con **Node.js**, **Express** y **Firebase Firestore**, que permite gestionar productos a través de una API REST.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)
- `fs` y `path` para manejo de archivos locales

---

## 📂 Estructura del proyecto

```
proyecto/
├── src/
│   ├── controllers/
│   │   └── products.controller.js
│   ├── routes/
│   │   └── products.routes.js
│   ├── models/
│   │   └── products.model.js (opcional)
│   └── data.js
├── .env
├── app.js
└── README.md
```

---

## ⚙️ Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

```bash
PORT=3000
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

> ⚠️ Datos obtenidos desde tu proyecto en Firebase.

---

## ▶️ Ejecutar la aplicación

```bash
npm run dev
```

> La aplicación se ejecutará por defecto en `http://localhost:3000`

---

## 📡 Endpoints disponibles

### 🔹 GET `/api/products`

Obtiene todos los productos desde Firebase.

### 🔹 GET `/api/products/:id`

Obtiene un producto específico por su ID.

### 🔹 POST `/api/products`

Crea un nuevo producto.

#### Body JSON requerido:

```json
{
  "name": "Producto test",
  "price": 1000,
  "category": "Accesorios"
}
```

### 🔹 PUT `/api/products/:id`

Actualiza un producto existente.

### 🔹 DELETE `/api/products/:id`

Elimina un producto por su ID.

### 🔹 GET `/api/products/search?name=...`

Filtra productos por nombre (opcional según implementación).

---

## 🧪 Probar sin Postman

Podés usar `curl`, un HTML con `fetch()`, o un archivo `.js` de prueba. Ejemplo en Node:

```js
fetch("http://localhost:3000/api/products", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Nuevo producto", price: 123, category: "Test" })
});
```

---

## 🛠 Posibles errores comunes

- `req.body` es `undefined`: asegurate de tener `app.use(express.json())` antes de tus rutas.
- `Cannot POST /api/products`: la ruta puede estar mal definida. Usá `router.post("/")` si montás las rutas en `"/api/products"`.

---

## 📃 Licencia

MIT © 2025 — Proyecto educativo desarrollado para el curso de Node.js - Talento Tech


---

## 🌐 Enlace del API desplegado en Vercel

Podrás acceder al API desde el siguiente enlace:

🔗 [https://.vercel.app](https://.vercel.app)


---

## 👨‍🏫 Créditos

Este proyecto fue desarrollado como parte del curso de **Node.js** en el programa **Talento Tech** 2025, dictado por el profesor **Jean Paul Ferreira**.

📺 Canal de YouTube del profesor: [@jepafecac](https://www.youtube.com/@jepafecac)
