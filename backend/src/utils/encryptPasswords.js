import bcrypt from 'bcrypt';

// Función para encriptar una contraseña
export const encryptPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Sal de encriptación: 10
    return hashedPassword;
  } catch (error) {
    console.log(error);
    throw new Error;
  }
};

export const comparePassword = async (password, userPassword) =>{
  return bcrypt.compare(password, userPassword);
}