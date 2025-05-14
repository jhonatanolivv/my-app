import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css";

const STATUS = {
    IDLE: "idle",
    SENDING: "sending",
    SENT: "sent",
    ERROR: "error",
};

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(STATUS.IDLE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(STATUS.SENDING);

        try {
            const response = await fetch("https://formspree.io/f/xnndlpnj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Erro no envio");
            }

            setStatus(STATUS.SENT);
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus(STATUS.ERROR);
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="headingContact">Contato</h2>
            <div className="containerContact">
                <div className="info">
                    <h3>Vamos conversar!</h3>
                    <p>
                        Preencha o formulário ao lado para entrar em contato comigo. Estou
                        disponível para projetos freelance, oportunidades de trabalho ou
                        apenas para trocar ideias.
                    </p>
                    <div className="contactInfo">
                        <div className="contactItem">
                            <Mail className="icon" />
                            <span>jhonatanvelaskii@icloud.com</span>
                        </div>
                        <div className="contactItem">
                            <Phone className="icon" />
                            <span>+54 11 64541174</span>
                        </div>
                        <div className="contactItem">
                            <MapPin className="icon" />
                            <span>Buenos Aires, AR</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="formGroup">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        className="submitButton"
                        type="submit"
                        disabled={status === STATUS.SENDING}
                    >
                        {status === STATUS.SENDING ? "Enviando..." : "Enviar mensagem"}
                    </button>
                    {status === STATUS.SENT && (
                        <p className="successMessage" aria-live="polite">
                            Mensagem enviada com sucesso!
                        </p>
                    )}
                    {status === STATUS.ERROR && (
                        <p className="errorMessage" aria-live="polite">
                            Ocorreu um erro ao enviar. Tente novamente.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
