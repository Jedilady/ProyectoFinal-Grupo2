import { useState } from 'react';
import './ContactForm.css';
import PrivacyModal from '../privacity/privacyModal';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [privacity, setPrivacity] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formSendMessage, setFormSendMessage] = useState(false);

  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [reasonError, setReasonError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [privacityError, setPrivacityError] = useState('');

  const navigate = useNavigate();

  const reasonSelect = [
    //motivo consulta select
    'Consulta general',
    'Incidencia con pedido',
    'Devoluciones',
    'Información de producto',
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulario enviado:', {
        name,
        lastName,
        phone,
        email,
        reason,
        message,
      });
      setFormSendMessage(true);
      //redirigimos a homepage luego del mensaje
      setTimeout(() => {
        navigate('/');
      }, 3000); //sobre 30 segundos.
    }
  };

  const validateForm = () => {
    let valid = true;

    setNameError(
      !name.trim()
        ? 'Por favor, ingresa tu nombre.'
        : name.trim().length < 3 //verificamos para minimo 3 letras
        ? 'El nombre debe tener al menos 3 caracteres.'
        : /\d/.test(name) //verificamos para numeros
        ? 'El nombre no puede contener números.'
        : ''
    );
    setLastNameError(
      !lastName.trim()
        ? 'Por favor, ingresa tu apellido.'
        : lastName.trim().length < 3
        ? 'El apellido debe tener al menos 3 caracteres.'
        : /\d/.test(name)
        ? 'El apellido no puede contener números.'
        : ''
    );
    setPhoneError(
      !phone || !/^\d{9}$/.test(phone) //validacion telefono
        ? 'Ingresa un número de teléfono válido (9 dígitos).'
        : ''
    );
    setEmailError(
      !email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) //validacion email
        ? 'Ingresa un correo electrónico válido.'
        : ''
    );
    setReasonError(!reason ? 'Selecciona un motivo de contacto.' : '');
    setMessageError(
      !message ? 'Por favor, escribe tu consulta o incidencia.' : ''
    );
    setPrivacityError(
      !privacity ? 'Debes aceptar la política de privacidad.' : ''
    );

    valid =
      name && lastName && phone && email && reason && message && privacity;
    return valid;
  };

  return (
    <div className="layout-container">
      <div className="container">
        {formSendMessage ? (
          <div className="mensaje-enviado">
            <h3>Formulario enviado con éxito</h3>
            <p>
              En breve nos pondremos en contacto con usted. Gracias por su
              consulta.
            </p>
          </div>
        ) : (
          <>
            <h2 className="title">FORMULARIO DE CONTACTO</h2>
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
                  Nombre*
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
                  Apellidos*
                </label>
                {lastNameError && <p className="error">{lastNameError}</p>}
              </div>

              <div className="input-container">
                <div className="phone-input">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input"
                    id="phone"
                  />
                </div>
                <label htmlFor="phone" className="label">
                  Numero de telefono*
                </label>
                {phoneError && <p className="error">{phoneError}</p>}
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
                  Correo Electronico*
                </label>
                {emailError && <p className="error">{emailError}</p>}
              </div>

              <div className="input-container">
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="input"
                  id="reason"
                >
                  <option value="">Selecciona un motivo</option>
                  {reasonSelect.map((reason, index) => (
                    <option key={index} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
                <label htmlFor="reason" className="label">
                  Motivo de contacto*
                </label>
                {reasonError && <p className="error">{reasonError}</p>}
              </div>

              <div className="input-container">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="input textarea"
                  id="message"
                ></textarea>
                <label htmlFor="message" className="label">
                  Escribe aquí tu consulta o incidencia*
                </label>
                {messageError && <p className="error">{messageError}</p>}
              </div>

              <p className="info-text">
                Aportanos toda la información posible para agilizar tu solución.{' '}
              </p>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={privacity}
                  onChange={(e) => setPrivacity(e.target.checked)}
                  id="privacity"
                />
                <label htmlFor="privacity">
                  He leído y entiendo la{' '}
                  <a
                    href="#"
                    className="link"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    Política de Privacidad
                  </a>
                </label>
                {privacityError && <p className="error">{privacityError}</p>}
              </div>

              <button type="submit" className="button">
                ENVIAR
              </button>
            </form>
            {showModal && <PrivacyModal onClose={() => setShowModal(false)} />}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
