import react from 'react';

const Footer = ({fecha}) => {
    return (
        <footer className="footer">
            <p>Todos los derechos reservados &copy; {fecha} </p>
        </footer>
    );
}

export default Footer;