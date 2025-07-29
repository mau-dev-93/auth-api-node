# Auth API Node.js + PostgreSQL

Este proyecto es una **API de autenticación básica** construida con **Node.js, Express y PostgreSQL**, diseñada como ejercicio de estudio para portafolio profesional.

Permite:
- Registro de usuarios con validación
- Inicio de sesión con JWT
- Rutas protegidas por token
- Validación de roles (`admin`, `user`)
- Documentación con Swagger
  
---

## 📦 Tecnologías utilizadas

- Node.js + Express
- PostgreSQL (`pg`)
- JSON Web Tokens (JWT)
- bcrypt
- express-validator
- morgan (logs)
- swagger-ui-express

---

## 🚀 Instalación

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/auth-api-node.git
cd auth-api-node
```

2. Instala dependencias

```bash
npm install
```

3. Crea un archivo .env a partir del .env.example
```env
PORT=3000
DATABASE_URL=postgresql://usuario:password@localhost:5432/authdb
JWT_SECRET=tu_token_secreto
