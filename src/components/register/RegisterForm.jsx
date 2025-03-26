import { useState, useContext } from 'react';
import './RegisterForm.css';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { addUser } from '../../utils/userDDBB';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const newUser = { email, password, role: 'user' };
        const updatedUser = addUser(newUser);
        login(updatedUser);

        console.log('Usuario registrado exitosamente:', email);

        // redirigmos
        navigate('/');
      } catch (error) {
        setRegistrationError(error.message);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    if (!name) {
      setNameError('Por favor ingresa un nombre');
      valid = false;
    } else {
      setNameError('');
    }

    if (!lastName) {
      setNameError('Por favor ingresa un apellido');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password || password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              id="name"
            />
            <label htmlFor="name" className="label">
              Nombre
            </label>
            {nameError && <p className="error">{nameError}</p>}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input"
              id="lastName"
            />
            <label htmlFor="lastName" className="label">
              Apellidos
            </label>
            {lastNameError && <p className="error">{lastNameError}</p>}
          </div>

          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              id="email"
            />
            <label htmlFor="email" className="label">
              E-mail
            </label>
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              id="password"
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
              id="confirmPassword"
            />
            <label htmlFor="confirmPassword" className="label">
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
