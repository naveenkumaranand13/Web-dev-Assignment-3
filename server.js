import express from "express";
import dns from "node:dns";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Body parser middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Root test route
app.get("/", (req, res) => {
  res.send("Inventory Management System API is running!");
});

// API Routes
app.use("/api/products", productRoutes);

// 404 Handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    message: `Route '${req.originalUrl}' not found`,
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

async function startServer() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MONGO_URI is missing. Add your MongoDB connection string to .env.");
    process.exit(1);
  }

  try {
    if (process.env.MONGO_DNS_SERVERS) {
      const dnsServers = process.env.MONGO_DNS_SERVERS.split(",").map((server) => server.trim());

      if (dnsServers.some((server) => !server)) {
        throw new Error("MONGO_DNS_SERVERS must contain comma-separated DNS server addresses.");
      }

      dns.setServers(dnsServers);
    }

    await mongoose.connect(mongoUri, {
      dbName: "inventory",
    });
    console.log("MongoDB Connected Successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

startServer();
