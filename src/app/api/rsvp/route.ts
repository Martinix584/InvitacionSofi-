import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, count, message } = body;

    if (!name || !count) {
      return NextResponse.json({ error: 'Nombre y cantidad son requeridos' }, { status: 400 });
    }

    // Si la variable de entorno de Vercel Postgres no está configurada (ej. entorno local inicial),
    // mostramos los datos por consola para poder probar el flujo.
    if (!process.env.POSTGRES_URL) {
      console.log('--- MODO DESARROLLO (Sin BD) ---');
      console.log('Nuevo RSVP recibido:', { name, count, message });
      return NextResponse.json({ success: true, warning: 'Guardado en memoria/consola por falta de POSTGRES_URL' }, { status: 200 });
    }

    // Asegurarse de que la tabla exista (esto idealmente se hace en un script de migración,
    // pero para este proyecto simple lo aseguramos aquí antes de insertar)
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
