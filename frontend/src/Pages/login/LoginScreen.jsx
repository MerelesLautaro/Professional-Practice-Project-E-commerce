import React from 'react';
import LoginForm from '../../features/login/LoginForm.jsx';
import '../../Pages/register/registerStyle.css';

const LoginScreen = () => {
  // Aquí podrías manejar la lógica de envío, redirección, etc.
  const handleLogin = (data) => {
    // TODO: conectar con la API en la tarea EC-34
    console.log('Login data:', data);
  };

  return (
    <div className="register-screen-container"> {/* Reutiliza estilos de register */}
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginScreen;
