const { body, validationResult } = require('express-validator');
const GENDER_CATALOG = require('../constants/genderCatalog');

const validateRegister = [
    body('name').notEmpty().withMessage('El Nombre es requerido'),
    body('last_name').notEmpty().withMessage('El Apellido es requerido'),
    body('email').isEmail().withMessage('Correo inválido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('phone_number').isMobilePhone().withMessage('Teléfono inválido'),
    body('gender').isIn(GENDER_CATALOG.map(g => g.code)).withMessage('Género inválido'),

    // Middleware para devolver errores
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const extractedErrors = errors.array().map(err => ({
                field: err.param,
                message: err.msg
            }));
            return res.status(400).json({ errors: extractedErrors });
        }
        next();
    }
];

module.exports = validateRegister;