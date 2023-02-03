import { dirname, join } from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(tasksRoutes);
app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log("servidor ejecutandose en el puerto", PORT);
