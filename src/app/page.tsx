'use client';

import { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // 31 de Mayo de 2026 a las 21:00 hs
    const targetDate = new Date('2026-05-31T21:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  return (
    <div className="countdown-container fade-in">
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.days}</span>
        <span className="countdown-label">Días</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.hours}</span>
        <span className="countdown-label">Hs</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.minutes}</span>
        <span className="countdown-label">Min</span>
      </div>
      <div className="countdown-box">
        <span className="countdown-number">{timeLeft.seconds}</span>
        <span className="countdown-label">Seg</span>
      </div>
    </div>
  );
}

function StarBackground() {
  const [stars, setStars] = useState<{ id: number, top: string, left: string, size: string, color: string, duration: string, shape: string, rotation: string }[]>([]);

  useEffect(() => {
    const pinkPalette = ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#e5b0bd'];
    const shapes = ['★', '✦', '✧'];
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 35 + 15}px`,
      color: pinkPalette[Math.floor(Math.random() * pinkPalette.length)],
      duration: `${Math.random() * 3 + 2}s`,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: `${Math.random() * 360}deg`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            fontSize: star.size,
            color: star.color,
            transform: `rotate(${star.rotation})`,
            '--duration': star.duration,
          } as React.CSSProperties}
        >
          {star.shape}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ name: '', count: '1', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error en el servidor');
      setStatus('success');
      setFormData({ name: '', count: '1', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <StarBackground />
      
      {/* Portada / Pantalla de Bienvenida */}
      <section className="welcome-screen">
        <div className="welcome-image-container">
          <img src="/portada.jpg" alt="Invitación Sofía" className="welcome-image" />
          <div className="welcome-overlay"></div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Desliza</span>
          <div className="scroll-icon">↓</div>
        </div>
      </section>

      <main className="container">
        {/* Hero Section */}
        <section className="hero fade-in">
        <p className="hero-subtitle">Te invito a mis</p>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '8rem', lineHeight: '0.9', color: 'var(--color-primary-dark)', margin: '0.5rem 0 1rem 0' }}>15</div>
        <h1 className="hero-title">Sofía</h1>
        <p className="hero-subtitle" style={{ fontSize: '2.5rem', marginTop: '-1rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Tirada Party</p>
        <p className="hero-date">Domingo 31 de Mayo<br />De 21:00 hs a 02:00 am</p>
        
        <Countdown />
      </section>

      {/* Detalles del Evento */}
      <section className="card fade-in delay-1">
        <div className="card-icon">📍</div>
        <h2 className="card-title">El Lugar</h2>
        <p className="card-text" style={{ marginTop: '0.5rem' }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=2931+Buenos+Vecinos,+Corralitos"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-primary-dark)', textDecoration: 'underline', fontWeight: 600 }}
          >
            Quincho Las Rosas
          </a><br />
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>(Toca para abrir en Google Maps)</span>
        </p>
      </section>

      {/* Sección Mezcla */}
      <section className="card fade-in delay-2">
        <div className="card-icon">🎉</div>
        <h2 className="card-title">Qué Llevar</h2>
        <p className="card-text">
          ¡Para la fiesta no te olvides de traer tu propia mezcla!<br/>
          Harina, huevos, espuma serpentina, polvos de colores...
        </p>
      </section>

      {/* Sección Regalo */}
      <section className="card fade-in delay-2">
        <div className="card-icon">🎁</div>
        <h2 className="card-title">Regalo</h2>
        <p className="card-text">
          Lo más importante para mí es que estés presente.<br/>
          Pero si además deseas regalarme algo, puedes hacerlo a través del siguiente alias:<br/><br/>
          <strong style={{ color: 'var(--color-primary-dark)', fontSize: '1.8rem', background: 'var(--color-secondary)', padding: '0.5rem 1rem', borderRadius: '12px', display: 'inline-block' }}>
            sofia.535.tela
          </strong>
        </p>
      </section>

      {/* Formulario RSVP */}
      <section className="rsvp-section fade-in delay-3">
        <h2 className="rsvp-title">Confirmar Asistencia</h2>

        {status === 'success' ? (
          <div className="status-message status-success">
            ¡Gracias por confirmar tu asistencia! Te espero para celebrar juntos.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre y Apellido *</label>
              <input
                id="name"
                type="text"
                required
                className="form-input"
                placeholder="Ej: Familia Pérez o Juan González"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="count" className="form-label">Cantidad de Personas *</label>
              <select
                id="count"
                className="form-select"
                value={formData.count}
                onChange={(e) => setFormData({ ...formData, count: e.target.value })}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
                <option value="0">No podré asistir</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje para Sofía (Opcional)</label>
              <textarea
                id="message"
                className="form-input"
                rows={3}
                placeholder="¡Feliz cumple!"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Confirmar'}
            </button>

            {status === 'error' && (
              <div className="status-message status-error">
                Hubo un error al enviar. Por favor, intenta nuevamente.
              </div>
            )}
          </form>
        )}
      </main>
    </>
  );
}
