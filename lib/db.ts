import { neon } from "@neondatabase/serverless";

export default async function getDbConnection() {
  if (!process.env.DATABASE_URL) {
    throw new Error("Neon Database URL is not defined");
  }
  
  const sql = neon(process.env.DATABASE_URL);
  const response=await sql`SELECT version()`;
  console.log("sql",response[0].version);
  return sql;
}
