import express from "express";
import { createServer as createViteServer } from "vite";
import { neon } from "@neondatabase/serverless";
import path from "path";
import dotenv from "dotenv";
import { personalInfo, projects } from "./src/data.js";

dotenv.config();

let CONNECTION_STRING = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_QLvEHB17dYAa@ep-young-band-an2n3l3x-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require";

// Sanitize if the user pasted the entire psql command
if (CONNECTION_STRING.startsWith('psql ')) {
  CONNECTION_STRING = CONNECTION_STRING.replace(/^psql\s+["']?/, '').replace(/["']?$/, '');
}

const sql = neon(CONNECTION_STRING);

async function initDB() {
  try {
    // Create personal_info table
    await sql`
      CREATE TABLE IF NOT EXISTS personal_info (
        id SERIAL PRIMARY KEY,
        name TEXT,
        tagline TEXT,
        email TEXT,
        phone TEXT,
        github TEXT,
        twitter TEXT,
        linkedin TEXT,
        about TEXT,
        profile_image TEXT
      );
    `;

    // Create projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(255) PRIMARY KEY,
        title TEXT,
        type TEXT,
        description TEXT,
        link TEXT,
        image TEXT,
        tech JSONB,
        features JSONB
      );
    `;

    // Check if personal_info is empty
    const personalInfoRes = await sql`SELECT COUNT(*) FROM personal_info`;
    if (parseInt(personalInfoRes[0].count) === 0) {
      await sql`
        INSERT INTO personal_info (name, tagline, email, phone, github, twitter, linkedin, about, profile_image)
        VALUES (${personalInfo.name}, ${personalInfo.tagline}, ${personalInfo.email}, ${personalInfo.phone}, 
        ${personalInfo.github}, ${personalInfo.twitter}, ${personalInfo.linkedin}, ${personalInfo.about}, ${personalInfo.profileImage})
      `;
      console.log('Seeded personal_info');
    }

    // Check if projects is empty
    const projectsRes = await sql`SELECT COUNT(*) FROM projects`;
    if (parseInt(projectsRes[0].count) === 0) {
      for (const p of projects) {
        await sql`
          INSERT INTO projects (id, title, type, description, link, image, tech, features)
          VALUES (${p.id}, ${p.title}, ${p.type}, ${p.description}, ${p.link}, ${p.image},
          ${JSON.stringify(p.tech)}, ${JSON.stringify(p.features)})
        `;
      }
      console.log('Seeded projects');
    }

  } catch (err) {
    console.error('Failed to initialize database', err);
  }
}

async function startServer() {
  await initDB();

  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // API constraints
  app.get("/api/portfolio", async (req, res) => {
    try {
      const personalInfoResult = await sql`SELECT * FROM personal_info LIMIT 1`;
      const projectsResult = await sql`SELECT * FROM projects`;
      
      const dbPersonalInfo = personalInfoResult[0];
      const pInfo = {
        name: dbPersonalInfo.name,
        tagline: dbPersonalInfo.tagline,
        email: dbPersonalInfo.email,
        phone: dbPersonalInfo.phone,
        github: dbPersonalInfo.github,
        twitter: dbPersonalInfo.twitter,
        linkedin: dbPersonalInfo.linkedin,
        about: dbPersonalInfo.about,
        profileImage: dbPersonalInfo.profile_image
      };

      const pList = projectsResult.map(row => ({
        id: row.id,
        title: row.title,
        type: row.type,
        description: row.description,
        link: row.link,
        image: row.image,
        tech: row.tech,
        features: row.features
      }));

      res.json({ personalInfo: pInfo, projects: pList });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
