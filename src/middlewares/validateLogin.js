const { body, validationResult } = require('express-validator');

const validateLogin = [
    body('email').notEmpty().withMessage('El correo es requerido'),
    body('email').isEmail().withMessage('Correo inválido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),

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

module.exports = validateLogin;