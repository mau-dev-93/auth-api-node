const db = require('../../config/db');

const getProfile = async (req, res) => {
    try {
        const { id } = req.user;

        const result = await db.query('SELECT id, name, last_name, email, phone_number, gender_id, role_id FROM users WHERE id = $1', [id]);
        const user = result.rows[0];

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        return res.status(200).json({ user });
    } catch (err) {
        console.error('Profile error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = { getProfile };