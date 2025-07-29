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
git clone https://github.com/mau-dev-93/auth-api-node.git
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

4. Ejecuta el script database/schema.sql en tu servidor PostgreSQL local.

5. Documentación Swagger, disponible en:
```bash
http://localhost:3000/api/docs
```

---

🛡️ Seguridad
- Contraseñas encriptadas con bcrypt
- Tokens JWT firmados y con expiración
- Validación estricta de datos de entrada
- Middleware de validación de token (validateToken)
- Middleware de roles (authorizeRole)

📋 Endpoints principales
- POST	/api/auth/register -> Registro de nuevos usuarios	Pública
- POST	/api/auth/login	-> Login y obtención de JWT	Pública
- GET	/api/profile	-> Obtener perfil del usuario autenticado	JWT
- GET	/api/admin/users	-> Listado de todos los usuarios (sólo admin)	JWT + rol admin

📁 Archivos importantes
- .env.example → Variables de entorno requeridas
- database/schema.sql → Script para crear tablas iniciales
- swagger/swagger.yaml → Documentación OpenAPI
