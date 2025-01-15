'use client';
import React, { useState } from 'react';
import './contacto.css';

// Tipo para los datos del formulario
type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
  };

  return (
    <div className="contacto-container">
    <h2>Contacto</h2>
    <div className="card">
      <div className="personal-data">
        <h3>Mis Datos Personales</h3>
        <ul>
          <li><strong>Nombre:</strong> Judit Alvarez Rubio</li>
          <li><strong>Correo Electrónico:</strong> juditrubio27@gmail.com</li>
          <li><strong>Teléfono:</strong> +34 629 282 152</li>
          <li><strong>Ubicación:</strong> España</li>
        </ul>
      </div>
  
      {/* <div className="contact-form">
        <h3>Envíame un Mensaje</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Tu Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label htmlFor="email">Tu Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label htmlFor="message">Tu Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
  
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div> */}
    </div>
  </div>
  
  );
};

export default Contacto;
