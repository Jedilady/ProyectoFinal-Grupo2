import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Profile.css'; //  estilos para el perfil

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedUser = {
        ...user,
        email,
        password,
      };

      console.log('Usuario actualizado:', updatedUser);

      localStorage.setItem('user', JSON.stringify(updateUser));
      updateUser(updatedUser); // actualizar en el contexto,
      console.log('Datos del perfil actualizados:', updatedUser);
      navigate('/'); // redirigimos
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

    if (password && password.length < 6) {
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
        <h2 className="title">Perfil de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <label htmlFor="email" className="label">
              Correo Electrónico
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
              Nueva Contraseña
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
            <label htmlFor="confirmPassword" className="label">
              Confirmar Nueva Contraseña
            </label>
            {confirmPasswordError && (
              <p className="error">{confirmPasswordError}</p>
            )}
          </div>

          <button type="submit" className="button">
            Actualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
