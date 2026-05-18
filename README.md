# Invitación Digital - Sofía 🎂✨

Una aplicación web moderna y elegante para gestionar invitaciones y confirmaciones de asistencia (RSVP) para una fiesta de 15 años. 

## Características Principales
- **Diseño Responsivo:** Adaptado para visualizarse perfectamente tanto en dispositivos móviles como de escritorio.
- **Estética Elegante:** Implementación de paletas de colores en tonos rosados y tipografías formales (`Alex Brush` y `Lato`).
- **Animaciones y Efectos:** Fondo dinámico de estrellas animadas y transiciones fluidas.
- **Cuenta Regresiva:** Contador en tiempo real hasta la fecha del evento.
- **Sistema RSVP Integrado:** Formulario de confirmación de asistencia conectado directamente a una base de datos PostgreSQL.
- **Integración con Google Maps:** Enlace directo para navegación asistida hacia el salón de eventos.

## Tecnologías Utilizadas
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript / React 19
- **Estilado:** CSS puro con Custom Properties (Variables CSS)
- **Base de Datos:** [@vercel/postgres](https://vercel.com/docs/storage/vercel-postgres)
- **Despliegue:** [Vercel](https://vercel.com/)

## Desarrollo Local

Para correr el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TuUsuario/InvitacionSofi-.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue en Producción

El proyecto está diseñado para ser desplegado fácilmente con Vercel ("Zero Configuration").

1. Importa el repositorio desde el panel de Vercel.
2. Ve a la pestaña **Storage** dentro del proyecto en Vercel.
3. Crea y asocia una base de datos **Postgres**. Esto inyectará automáticamente las credenciales (`POSTGRES_URL`) necesarias para que el sistema de RSVP funcione en producción.
4. Despliega (Deploy) la aplicación.

---
*Desarrollado con ❤️ para celebrar los 15 de Sofía.*
