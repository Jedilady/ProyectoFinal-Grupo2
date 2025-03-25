import { useState, useContext } from 'react';
import './RegisterForm.css';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      if (storedUsers.some((user) => user.email === email)) {
        setRegistrationError('Este correo electrónico ya está registrado.');
      } else {
        const newUser = { email, password, role: 'user' };

        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        updateUser(newUser);

        console.log('Usuario registrado exitosamente:', email);

        // redirigmos
        navigate('/home');
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
