// import type { Config } from 'drizzle-kit';
// import * as dotenv from 'dotenv';
// dotenv.config({ path: '.env' });

// if(!process.env.DATABASE_URL){
//     console.log("Cannot find database url");
// }

// export default {
//     schema: './src/lib/supabase/schema.ts', 
//     out: './migrations',
//     dialect: "postgresql",
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL || "",
//     },
// }

import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Check if DATABASE_URL exists
if (!process.env.DATABASE_URL) {
  console.error("❌ Cannot find DATABASE_URL in .env file");
  process.exit(1);
}

// Export Drizzle config
export default defineConfig({
  schema: "./src/lib/supabase/schema.ts", // your schema file path
  out: "./migrations",                    // folder where migrations will be stored
  dialect: "postgresql",                  // required for Supabase (PostgreSQL)
  dbCredentials: {
    url: process.env.DATABASE_URL!,       // ✅ connection string from .env
  },
});
