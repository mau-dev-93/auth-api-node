const db = require('../../config/db');

const getUsers = async (req, res) => {
    try {
        const result = await db.query('SELECT id, name, last_name, email, gender_id, phone_number, role_id, created_at FROM users ORDER BY created_at DESC');
        return res.status(200).json({ users: result.rows });
    } catch (err) {
        console.error('Profile error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = { getUsers };