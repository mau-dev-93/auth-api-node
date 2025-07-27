const authorizeRole = (roleRequired) => (req, res, next) => {
    if (!req.user || req.user.role !== roleRequired) {
        return res.status(403).json({ error: 'Acceso denegado' });
    }
    next();
};

module.exports = authorizeRole;