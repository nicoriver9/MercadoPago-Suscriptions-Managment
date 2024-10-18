import db from "../config/sequelize.js";
import { createToken } from "../helpers/createToken.js";
import { comparePassword } from "../utils/encryptPasswords.js";


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;   

    const user = await db.Administrator.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password incorrect' });
    }

    const token = await createToken(user.username, user.id);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something goes wrong' });
  }
};