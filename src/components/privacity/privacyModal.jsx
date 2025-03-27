import './PrivacyModal.css';

const PrivacyModal = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // cerramos el modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          ✖
        </button>
        <h2>Política de Privacidad</h2>
        <p>
          En <strong>Nüa</strong>, nos tomamos muy en serio tu privacidad...
        </p>
        <h3>1. Información que Recopilamos</h3>
        <p>
          Recopilamos información personal como nombre, apellidos, correo
          electrónico y teléfono...
        </p>

        <h3>2. Cómo Usamos Tu Información</h3>
        <p>
          Utilizamos tu información para procesar pedidos, mejorar tu
          experiencia y brindarte soporte...
        </p>

        <h3>3. Contacto</h3>
        <p>
          Si tienes alguna pregunta, contáctanos en:{' '}
          <a href="mailto:contacto@NÜA.com">contacto@NÜA.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyModal;
