import { useState } from 'react';
import './LoginForm.css';
import { useNavigate, Link } from 'react-router-dom';
import users from '../../data/users';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (authenticateUser()) {
        console.log('Inicio de sesión exitoso');
        const user = users.find((user) => user.email === email);
        if (user.role === 'admin') {
          navigate('/admin'); // Si el rol es administrador nos envia a la pagina de admin.
        } else {
          navigate('/payment'); // Nos envia a la pagina de payment si el login es ok.
        }
      } else {
        setLoginError('Correo electrónico o contraseña incorrectos');
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

    return valid;
  };

  const authenticateUser = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user !== undefined; // Retorna true si el usuario existe
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
