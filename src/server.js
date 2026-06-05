import { configDotenv } from "dotenv";

configDotenv();

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
