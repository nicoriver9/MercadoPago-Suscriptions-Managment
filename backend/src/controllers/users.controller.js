import db from '../config/sequelize.js';
import { encryptPassword } from '../utils/encryptPasswords.js';

export const createAdministrator = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hashedPassword = await encryptPassword(password);

    const administrator = await db.Administrator.create({
      username,
      password: hashedPassword,
      email,
      active: 1
    });

    res.json(administrator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteAdministrator = async (req, res) => {
  try {
    const { id } = req.params;

    const administrator = await db.Administrator.findByPk(id);

    if (!administrator) {
      return res.status(404).json({ message: 'User not found' });
    }

    administrator.active = 0;
    await administrator.save();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateAdministrator = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, email, active } = req.body;

    const administrator = await db.Administrator.findByPk(id);

    if (!administrator) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await encryptPassword(password);

    administrator.username = username;
    administrator.password = hashedPassword;
    administrator.email = email;
    administrator.active = active;

    await administrator.save();

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const listAdministrators = async (req, res) => {
  try {
    const administrators = await db.Administrator.findAll({ where: { active: 1 } });
    res.json(administrators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};