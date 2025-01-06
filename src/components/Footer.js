import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#222", color: "#fff", padding: "20px", textAlign: "center" }}>
            {/* Links de Navegação */}
            <nav>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
                    <li>
                        <a
                            href="#inicio"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#8B0000")} // Cor de hover para o link
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                        >
                            Início
                        </a>
                    </li>
                    <li>
                        <a
                            href="#serviços"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#8B0000")} // Cor de hover para o link
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                        >
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#8B0000")} // Cor de hover para o link
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contato"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#8B0000")} // Cor de hover para o link
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Links das Redes Sociais */}
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
                <a
                    href="https://wa.me/+5537998351186"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "20px",
                        transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                    <FaWhatsapp /> WhatsApp
                </a>

                <a
                    href="https://instagram.com/pablosousa.code"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "20px",
                        transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")} // Cor do Instagram
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                    <FaInstagram /> Instagram
                </a>

                <a
                    href="https://www.linkedin.com/in/pablosousa22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "20px",
                        transition: "color 0.3s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0077B5")} // Cor do LinkedIn
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                >
                    <FaLinkedin /> Linkedin
                </a>
            </div>

            {/* Mapa */}
            <div style={{ marginTop: "20px", width: "100%", height: "300px", position: "relative" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15042.689384213634!2d-44.68683874431014!3d-19.512727658539156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa70b16a1d117f1%3A0x66f417428e8f2a95!2sMaravilhas%2C%20State%20of%20Minas%20Gerais%2C%2035666-000!5e0!3m2!1sen!2sbr!4v1736174013531!5m2!1sen!2sbr" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Minha localização"
                ></iframe>
            </div>

            {/* Texto de Direitos Reservados */}
            <p style={{ marginTop: "20px", fontSize: "14px" }}>© 2024 Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
