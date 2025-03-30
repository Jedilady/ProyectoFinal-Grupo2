import './AboutComponet.css';
import { FaGithub } from 'react-icons/fa';

const AboutComponent = () => {
  const teamMembers = [
    { name: 'Delcy', github: 'https://github.com/Delcyacp' },
    { name: 'Leidy', github: 'https://github.com/Leidymt2024' },
    { name: 'Juvili', github: 'https://github.com/Jedilady' },
    { name: 'Jennifer', github: 'https://github.com/Jenn88PH' },
  ];

  return (
    <section className="section-container">
      <div className="container-main">
        <h2 className="title">Sobre Nosotras</h2>
        <p className="subtitle">
          ¡Bienvenidos a nuestro proyecto! Somos cuatro chicas que cursamos el
          bootcamp de <strong>Codespace</strong>, sumergiéndonos en el mundo de
          la programación. Este proyecto es el reflejo de todo lo aprendido y
          nuestro trabajo en equipo. Cada línea de código es fruto de esfuerzo,
          práctica y colaboración, y esperamos que disfruten de la web tanto
          como nosotras creándola.
        </p>

        <p className="text">
          Gracias al apoyo de <strong>La Rueca Asociación</strong> y{' '}
          <strong>Provivienda</strong>, a través del programa{' '}
          <strong>Mares de Cuidados</strong>, tuvimos la oportunidad de aprender
          a utilizar herramientas clave como HTML, CSS, JavaScript, React y
          Sass. Cada una de nosotras puso su toque único para darle forma a esta
          página web, que es una mezcla de creatividad, esfuerzo y todo lo que
          hemos aprendido en el camino.
        </p>

        <p className="text">
          Un enorme agradecimiento a <strong>Cristina Martín</strong>, nuestra
          profe, por todo el tiempo, paciencia y apoyo que nos brindó. Sin ella,
          no hubiéramos logrado superar todos esos desafíos técnicos y seguir
          aprendiendo sin parar. También mencionar a <strong>Lidia Pons</strong>
          , nuestra coordinadora académica, que siempre estuvo ahí para guiarnos
          y darnos ese empujoncito de motivación cuando más lo necesitábamos.
        </p>
        <p className="text">
          Y no podemos dejar de agradecer a <strong>Antonella Orbani</strong>,
          por sus consejos y esas reuniones de los viernes en las que nos hizo
          sentir en un espacio de confianza. Nos ayudó no solo en lo técnico,
          sino también a crecer como personas.
        </p>

        <p className="text">
          Gracias a nuestras increíbles compañeras de bootcamp. Fueron meses
          intensos, llenos de retos, errores (y sus mágicas soluciones), risas y
          los sagrados <strong>cafecitos de los viernes</strong>. De cada una
          nos llevamos algo especial: apoyo, motivación y la certeza de que
          programar en equipo siempre es más divertido.
        </p>

        <div className="team">
          <h3 className="title-team">El equipo de desarrollo:</h3>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <span>{member.name}</span>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
