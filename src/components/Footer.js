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
                {/* WhatsApp */}
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

            {/* Texto de Direitos Reservados */}
            <p style={{ marginTop: "20px", fontSize: "14px" }}>© 2024 Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
