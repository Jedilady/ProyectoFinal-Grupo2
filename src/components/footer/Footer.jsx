import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <Link to="/about">
          <button className="footer-button">About</button>
        </Link>

        <Link to="/contact">
          <button className="footer-button">Contact</button>
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
