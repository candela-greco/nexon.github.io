import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <>
        <div className="Redes">
            <FontAwesomeIcon icon={ faFacebook }/>
            <FontAwesomeIcon icon={ faInstagram }/>
            <FontAwesomeIcon icon={ faWhatsapp }/>
        <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><i
                    className="fa-brands fa-facebook fa-2xl"></i></a>
            <a href="https://www.instagram.com/roma.rescates" target="_blank"><i
                    className="fa-brands fa-instagram fa-2xl"></i></a>
            <a href="https://web.whatsapp.com/" target="_blank"><i
                    className="fa-brands fa-whatsapp fa-2xl"></i></a>
        </div>
        <div className="LinksUtiles">

        </div>
        </>
    )
}

export default Footer;