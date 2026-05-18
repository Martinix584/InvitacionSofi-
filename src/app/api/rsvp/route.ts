import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, count, message } = body;

    if (!name || !count) {
      return NextResponse.json({ error: 'Nombre y cantidad son requeridos' }, { status: 400 });
    }

    // Usar DATABASE_URL que es el estándar de Neon (o POSTGRES_URL de Vercel Postgres legacy)
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (!connectionString) {
      console.log('--- MODO DESARROLLO (Sin BD) ---');
      console.log('Nuevo RSVP recibido:', { name, count, message });
      return NextResponse.json({ success: true, warning: 'Guardado en consola por falta de DATABASE_URL' }, { status: 200 });
    }

    const sql = neon(connectionString);

    // Asegurarse de que la tabla exista
    await sql`
      CREATE TABLE IF NOT EXISTS guests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        count INTEGER NOT NULL,
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insertar el nuevo invitado
    await sql`
      INSERT INTO guests (name, count, message)
      VALUES (${name}, ${count}, ${message || ''});
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error al procesar el RSVP:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
