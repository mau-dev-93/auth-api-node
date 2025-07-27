const db = require('../../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const roleCatalog = require('../constants/roleCatalog');

const registerUser = async (req, res) => {
    const { name, last_name, email, password, gender, phone_number } = req.body;
    
    try {
        // Verificar si ya existe el usuario
        const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);

        if (userExists.rows.length > 0) {
            return res.status(409).json({ error: 'Usuario ya existe' });
        }

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertar usuario
        await db.query('INSERT INTO users (name, email, password, last_name, gender_id, phone_number, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, email, hashedPassword, last_name, gender, phone_number, roleCatalog.user]);

        return res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error('Register error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario
        const result = await db.query('SELECT id, password, name, last_name, email, phone_number, gender_id, role_id FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(401).json({ error: 'Usuario o contraseña inválidos' });
        }

        // Comparar contraseñas
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Usuario o contraseña inválidos' });
        }

        // Generar JWT
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role_id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        // Devolver token y datos del usuario
        return res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number,
                gender_id: user.gender_id,
                role_id: user.role_id
            }
        });

    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    registerUser,
    loginUser
};