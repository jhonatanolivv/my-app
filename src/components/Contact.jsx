

import { useState } from "react";
import "./Contact.css";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("sending")

        //Simualação de formulario
        setTimeout(() => {
            setStatus("sent")
            setFormData({
                name: "",
                email: "",
                message: "",
            })
        }, 2000)
    }

    return (
        <section className="contact" id="contact">
            <h2 className="headingContact">CONTATO</h2>
            <div className="containerContact">
                <div className="info">
                    <h3>Vamos conversar!</h3>
                    <p>
                        Preencha o formulário ao lado para entrar em contato comigo. Estou disponível para projetos freelance,
                        oportunidades de trabalho ou apenas para trocar ideias.
                    </p>
                    <div className="contactInfo">
                        <div className="contactItem">
                            <span className="icon">✉️</span>
                            <span>jhonatanvelaskii@icloud.com</span>
                        </div>
                        <div className="contactItem">
                            <span className="icon">📱</span>
                            <span>+54 11 64541174</span>
                        </div>
                        <div className="contactItem">
                            <span className="icon">📍</span>
                            <span>Buenos Aires, AR</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="formGroup">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
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
                    <button className="submitButton" type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                    </button>
                    {status === "sent" && <p className="successMessage">Mensagem enviada com sucesso!</p>}
                </form>
            </div>
        </section>
    )
}