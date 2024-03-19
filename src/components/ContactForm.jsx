import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validar que todos los campos estén llenos
    if (!formData.name || !formData.email || !formData.message) {
      setConfirmationMessage("Por favor, complete todos los campos antes de enviar el formulario.");
      return;
    }

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "5b47ae94-c89a-4ac1-a847-c63a735a5037");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setConfirmationMessage("¡El correo se ha enviado con éxito!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }else {
      setConfirmationMessage("Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div className={styles.container}>
      {confirmationMessage && <div className={styles.confirmationMessage}>{confirmationMessage}</div>}
      <form className={styles["form-container"]} onSubmit={onSubmit} id="contact">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
