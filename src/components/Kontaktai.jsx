
import './style/Kontaktai.scss';
import facebookImg from '../assets/facebook.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function Kontaktai() {



    return (
        <footer className="kontaktai" id="contact">
            <div className="kontaktai-container">

                <div className="kontaktai-info">
                    <h2>Susisiekime</h2>
                    <p>Jei turite klausimų ar pasiūlymų, susisiekite su manimi!</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>e.zarpnickas@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+370 679 21904</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Vilnius, Lietuva</span>
                        </div>
                    </div>

                    <div className="social-links">

                        <a href="https://github.com/EgidijusZarpnickas" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt='github'></img>
                        </a>


                        <a href="https://lt.linkedin.com/in/egidijus-%C5%BEarpnickas-a26843368" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt='facebook'></img>
                        </a>




                    </div>
                </div>



                <div className="footer-bottom">
                    <p>&copy;  2025 Egidijus Žarpnickas. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}