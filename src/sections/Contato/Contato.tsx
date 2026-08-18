'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/schemas/contactSchema';

export function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      setIsSubmitting(true);
      setSuccessMessage('');
      setErrorMessage('');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error('Erro ao enviar mensagem.');
      }

      setSuccessMessage('Mensagem enviada com sucesso!');

      reset();
    } catch {
      setErrorMessage('Não foi possível enviar a mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="container py-5 border-top">
      <h2 className="display-6 fw-bold mb-4">Contato</h2>

      <p className="lead mb-4">Vamos conversar?</p>

      <p>Estou sempre aberta a novas oportunidades, projetos e conexões profissionais.</p>

      <div className="row g-5 mt-4">
        <div className="col-12 col-md-4">
          <a href="https://github.com/tayanibritto" target="_blank" className="contact-card">
            🐙 GitHub
            <p>Veja projetos e código-fonte</p>
          </a>
        </div>

        <div className="col-12 col-md-4">
          <a
            href="https://www.linkedin.com/in/tayani-britto/"
            target="_blank"
            className="contact-card"
          >
            💼 LinkedIn
            <p>Vamos nos conectar.</p>
          </a>
        </div>

        <div className="mt-5">
          <h3 className="h4 mb-4">Ou envie uma mensagem:</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nome{' '}
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className="form-control"
                {...register('name')}
              />

              {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail{' '}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="form-control"
                {...register('email')}
              />

              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensagem{' '}
              </label>
              <textarea id="message" rows={6} className="form-control" {...register('message')} />

              {errors.message && <small className="text-danger">{errors.message.message}</small>}
            </div>

            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register('website')}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {successMessage && <p className="text-success mt-3">{successMessage}</p>}

            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
