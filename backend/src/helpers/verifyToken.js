import jwt from 'jsonwebtoken'

export const TokenValidation = (req, res) => {
    try {
        const token = req.header('token');
        if (!token) return res.status(401).json('Access Denied');
        const payload = jwt.verify(token, process.env['TOKEN_SECRET'] || '');
        return true;
        
    } catch (e) {        
        return false;
    }
}