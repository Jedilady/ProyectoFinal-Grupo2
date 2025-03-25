import { useState, useContext } from 'react';
import './LoginForm.css';
import { useNavigate, Link } from 'react-router-dom';

import UserContext from '../../context/UserContext'; //Contexto user

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const validateForm = () => {
    let valid = true;

    // checkeo de correo electronico
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
      valid = false;
    } else {
      setEmailError('');
    }

    // checkeo de la contraseña
    if (!password || password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  //  autenticar al usuario
  const authenticateUser = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    return storedUsers.find(
      (storedUser) =>
        storedUser.email === email && storedUser.password === password
    );
  };

  // envio formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = authenticateUser();

      if (user) {
        // Si se encuentra el usuario, actualizamos el contexto y redirigimos
        updateUser(user);

        // redirigimos
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        setLoginError('Correo electrónico o contraseña incorrectos');
      }
    }
  };

  return (
    <div className="layout-container">
      <div className="container">
        <h2 className="title">INICIAR SESIÓN</h2>
        <p className="subtitle">
          Introduce tu correo y contraseña para acceder
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              autoComplete="false"
            />
            <label htmlFor="email" className="label">
              Correo electrónico
            </label>
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              autoComplete="false"
            />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            {passwordError && <p className="error">{passwordError}</p>}
            {loginError && <p className="error">{loginError}</p>}
          </div>

          <p className="forgot-password">
            ¿Has olvidado tu contraseña? Haz clic
            <a href="/reset-password"> aquí</a>
          </p>

          <button type="submit" className="button">
            INICIAR SESIÓN
          </button>
        </form>
      </div>

      <div className="container register-container">
        <h2 className="title">¿Aún no tienes cuenta?</h2>
        <p className="no-account">
          Si todavía no tienes una cuenta de usuario de Nüa, accede al
          formulario de registro.
        </p>
        <p className="no-account">
          Te solicitaremos la información imprescindible para el proceso de
          alta.
        </p>
        <Link to="/register">
          <button className="button-second">CREAR USUARIO</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
