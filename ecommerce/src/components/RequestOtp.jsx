import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RequestOtp.module.css';

const RequestOtp = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Por favor, ingresa un formato de correo válido.');
      return;
    }

    setIsLoading(true);

    try {
      console.log(`Solicitando OTP para el correo: ${email}`);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Solicitud exitosa. Redirigiendo...');
      navigate('/verify-otp');

    } catch (apiError) {
      setError('Hubo un problema al solicitar el código. Inténtalo de nuevo.');
      console.error('Error en la solicitud de OTP:', apiError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Restablecer Contraseña</h2>
        <p>Ingresa tu correo electrónico y te enviaremos un código para continuar.</p>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu.correo@ejemplo.com"
            required
            className={error ? styles.inputError : ''}
          />
          {error && <p className={styles.errorText}>{error}</p>}
        </div>

        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar Código'}
        </button>
      </form>
    </div>
  );
};

export default RequestOtp;