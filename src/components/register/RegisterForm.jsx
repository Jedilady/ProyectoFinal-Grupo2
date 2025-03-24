import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import users from '../../data/users';
import './RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (users.some((user) => user.email === email)) {
        setRegistrationError('Este correo electrónico ya está registrado.');
      } else {
        users.push({ email, password, role: 'user' });
        console.log('Usuario registrado exitosamente:', email);
        navigate('/login');
      }
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password || password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    return valid;
  };

  return (
    <div className="layout-container">
      <div className="container">
        <h2 className="title">REGISTRO DE USUARIO</h2>
        <p className="subtitle">
          Introduce los siguientes datos para registrarte
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <label htmlFor="email" className="label">
              e-mail
            </label>
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            {passwordError && <p className="error">{passwordError}</p>}
          </div>

          <div className="input-container">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
            />
            <label htmlFor="password" className="label">
              Repetir Contraseña
            </label>
            {confirmPasswordError && (
              <p className="error">{confirmPasswordError}</p>
            )}
          </div>

          {registrationError && <p className="error">{registrationError}</p>}

          <button type="submit" className="button">
            REGISTRARTE
          </button>
        </form>
      </div>
      <div className="container container-cuenta">
        <p className="login-link">¿Ya tienes cuenta? Accede aquí:</p>
        <Link to="/login">
          <button className="button-second">IR A INICIO DE SESIÓN</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
