import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import { config } from "dotenv";

import { conectDB } from "./db.js";
import { PORT } from "./config.js";

import productsRouter from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import salesRoutes from "./routes/sale.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

config()
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", productsRouter);
app.use("/api/auth", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", salesRoutes);

app.use("/api/img", express.static(path.join(__dirname, "../uploads")));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

function main() {
  try {
    conectDB();
    app.listen(PORT);
    console.log("server on port", PORT);
  } catch (error) {
    console.log(error);
  }
}
main();
