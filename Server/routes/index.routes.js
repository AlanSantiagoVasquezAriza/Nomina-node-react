import { Router } from 'express';
import { pool } from '../configuration/db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT 1 + 1 AS solution');
        console.log(rows)
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
});

export default router;