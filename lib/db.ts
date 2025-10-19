import { neon } from '@neondatabase/serverless';

// Initialize Neon database connection
// Add your DATABASE_URL to .env.local
// Example: DATABASE_URL=postgresql://user:password@host/database?sslmode=require

export function getDb() {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not set. Database features will be disabled.');
    return null;
  }
  
  return neon(process.env.DATABASE_URL);
}

// Schema for contact form submissions
// Run this SQL in your Neon console to create the table:
/*
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  service_type VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

export async function saveContactSubmission(data: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}) {
  const sql = getDb();
  
  if (!sql) {
    throw new Error('Database not configured');
  }

  try {
    await sql`
      INSERT INTO contact_submissions (name, email, phone, service_type, message)
      VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.serviceType}, ${data.message})
    `;
    return { success: true };
  } catch (error) {
    console.error('Error saving contact submission:', error);
    throw error;
  }
}

