import jwt from 'jsonwebtoken';

export const createToken = async (username, id) => {        
    // Create a Token
    const token = jwt.sign({ username: username, id: id }, process.env.TOKEN_SECRET || '',
    { 
        expiresIn: process.env.TOKEN_EXPIRED_INTERVAL_SECS + 's' 
    });
    return token;
};
