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
DB_USER=user
DB_PASSWORD=password
DB_HOST=host
DB_PORT=port
DB_NAME=dbname
JWT_SECRET=tu_token_secreto
```

4. Documentación Swagger
```bash
http://localhost:3000/api/docs
```

📁 Archivos importantes
.env.example → Variables de entorno requeridas
database/schema.sql → Script para crear tablas iniciales
swagger/swagger.yaml → Documentación OpenAPI

🛡️ Seguridad
Contraseñas encriptadas con bcrypt
Tokens JWT firmados y con expiración
Validación estricta de datos de entrada
Middleware de validación de token (validateToken)
Middleware de roles (authorizeRole)

📋 Endpoints principales
POST	/api/auth/register	-> Registro de nuevos usuarios	Pública
POST	/api/auth/login	-> Login y obtención de JWT	Pública
GET	/api/profile	-> Obtener perfil del usuario autenticado	JWT
GET	/api/admin/users	-> Listado de todos los usuarios (admin only)	JWT + rol admin
