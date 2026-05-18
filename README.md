# Invitación Digital - Sofía 🎂✨

Una aplicación web moderna y elegante para gestionar invitaciones y confirmaciones de asistencia (RSVP) para una fiesta de 15 años. 

## Características Principales
- **Pantalla de Bienvenida (Portada):** Una experiencia inicial inmersiva a pantalla completa (`100vh`) con el póster/collage del evento, un gradiente que se funde con el fondo y un indicador animado para invitar al usuario a deslizar.
- **Diseño Responsivo:** Adaptado para visualizarse perfectamente tanto en dispositivos móviles (modo full-screen) como de escritorio (centrado manteniendo el aspect ratio).
- **Estética Elegante:** Implementación de paletas de colores en tonos rosados, opacidades ajustadas para mejorar contraste y tipografías formales (`Alex Brush` y `Lato`).
- **Animaciones y Efectos:** Fondo dinámico de estrellas animadas semi-translúcidas y transiciones fluidas.
- **Cuenta Regresiva:** Contador en tiempo real hasta la fecha del evento.
- **Sistema RSVP Integrado:** Formulario de confirmación de asistencia conectado directamente a una base de datos PostgreSQL Serverless.
- **Integración con Google Maps:** Enlace directo para navegación asistida hacia el salón de eventos.

## Tecnologías Utilizadas
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript / React 19
- **Estilado:** CSS puro con Custom Properties (Variables CSS) y media queries.
- **Base de Datos:** [@neondatabase/serverless](https://neon.tech) (Postgres Serverless oficial, reemplazando a Vercel Postgres)
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

1. Importa el repositorio desde el panel de Vercel (Asegúrate de que el "Framework Preset" sea `Next.js`).
2. Agrega la integración oficial de **Neon** desde el Marketplace de Vercel.
3. Esto inyectará automáticamente la variable de entorno `DATABASE_URL` necesaria para que el sistema de RSVP funcione en producción.
4. Despliega (Deploy) o haz "Redeploy" de la aplicación.

---
*Desarrollado con ❤️ para celebrar los 15 de Sofía.*
**Nota:** Este proyecto está *95% vibe codeado* ✨.
