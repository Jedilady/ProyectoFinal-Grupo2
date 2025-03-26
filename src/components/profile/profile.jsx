import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Profile.css'; //  estilos para el perfil
import { updateUser } from '../../utils/userDDBB';

const Profile = () => {
  const { user, login } = useContext(UserContext);
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(user.name || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedUser = {
        ...user,
        name,
        lastName,
        email,
      };

      if (password) updatedUser.password = password;

      console.log('Usuario actualizado:', updatedUser);

      updateUser(updatedUser);

      login(updatedUser);
      console.log('Datos del perfil actualizados:', updatedUser);
      navigate('/'); // redirigimos
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

    if (password.length != 0 && password.length < 6) {
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
              id="password"
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
              id="confirmPassword"
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
