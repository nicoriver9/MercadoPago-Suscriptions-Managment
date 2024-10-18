import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url';
import cors from 'cors'

import subscripcionRoutes from "./routes/subscripcion.routes.js";
import usersRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import { authenticate } from "./middlewares/authenticate.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

app.use(subscripcionRoutes);
app.use('/admin', authenticate, usersRoutes);
app.use(authRoutes);

app.use(express.static(path.resolve("src/public")));

//react-router-dom
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(3000);
console.log("Server on port", 3000);
