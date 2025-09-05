import React, { useState } from 'react';
import FormButton from '../../shared/components/FormButton.jsx';
import Divider from '../../shared/components/Divider.jsx';
import Container from '../../shared/components/Container.jsx';
import "../../Pages/register/registerStyle.css";

const PasswordToggle = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-field">
      <label htmlFor="password">Contraseña</label>
      <div className="input-wrapper" style={{ width: '100%' }}>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          required
        />
        <span
          className="password-toggle"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? 'Ocultar' : 'Ver'}
        </span>
      </div>
    </div>
  );
};

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    setError('');
    if (onSubmit) onSubmit({ email, password });
  };

  return (
    <Container>
      <div className="forms-title">
        <h1>Iniciar Sesión | </h1>
        <h2>¿No tienes cuenta?</h2>
        <a href="/register">Regístrate aquí</a>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <Divider />
        <div className="input-field">
          <label htmlFor="email">Correo Electrónico</label>
          <div className="input-wrapper">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <PasswordToggle value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="error">{error}</div>}
        <FormButton label="Ingresar" submit />
      </form>
    </Container>
  );
};

export default LoginForm;
export { PasswordToggle };
