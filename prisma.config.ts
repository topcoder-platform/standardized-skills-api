import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: { url: process.env.TC_SKILLS_DATABASE_URL },
});
