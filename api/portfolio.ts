import { neon } from "@neondatabase/serverless";
import { projects as staticProjects } from "../src/data.js";

let CONNECTION_STRING = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_QLvEHB17dYAa@ep-young-band-an2n3l3x-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require";

if (CONNECTION_STRING.startsWith('psql ')) {
  CONNECTION_STRING = CONNECTION_STRING.replace(/^psql\s+["']?/, '').replace(/["']?$/, '');
}

const sql = neon(CONNECTION_STRING);

export default async function handler(req: any, res: any) {
  try {
    const personalInfoResult = await sql`SELECT * FROM personal_info LIMIT 1`;
    const projectsResult = await sql`SELECT * FROM projects`;
    
    if (personalInfoResult.length === 0) {
       return res.status(500).json({ error: 'Database not initialized. Please run the local server once to seed the database.' });
    }

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

    // Sort according to src/data.ts
    const idOrder = staticProjects.map(p => p.id);
    pList.sort((a, b) => {
      const idxA = idOrder.indexOf(a.id);
      const idxB = idOrder.indexOf(b.id);
      return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
    });

    res.status(200).json({ personalInfo: pInfo, projects: pList });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
