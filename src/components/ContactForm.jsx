// import React, { useState } from "react";
// import styles from "./ContactForm.module.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [confirmationMessage, setConfirmationMessage] = useState("");


//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     // Validar que todos los campos estén llenos
//     if (!formData.name || !formData.email || !formData.message) {
//       setConfirmationMessage("Por favor, complete todos los campos antes de enviar el formulario.");
//       return;
//     }

//     const formDataToSend = new FormData(event.target);
//     formDataToSend.append("access_key", "5b47ae94-c89a-4ac1-a847-c63a735a5037");

//     const object = Object.fromEntries(formDataToSend);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       setConfirmationMessage("¡El correo se ha enviado con éxito!");
//       setFormData({
//         name: "",
//         email: "",
//         message: ""
//       });

//     }else {
//       setConfirmationMessage("Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {confirmationMessage && <div className={styles.confirmationMessage}>{confirmationMessage}</div>}
//       <form className={styles["form-container"]} onSubmit={onSubmit} id="contact">
//         <label htmlFor="name">Nombre:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Correo Electrónico:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="message">Mensaje:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import styles from './ContactForm.module.css'; // Importa el archivo de estilos

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mbjnaklr");
//   if (state.succeeded) {
//     return <p className={styles.successMessage}>Thanks for joining!</p>; // Estilo para mensaje de éxito
//   }
//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <label htmlFor="email" className={styles.label}>
//         Correo
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//         className={styles.input}
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//         className={styles.error}
//       />
//       <label className={styles.label}>
//       Mensaje  
//       </label>
//       <textarea
//         id="message"
//         name="message"
//         className={styles.textarea}
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//         className={styles.error}
//       />
//       <button type="submit" disabled={state.submitting} className={styles.button}>
//         Enviar
//       </button>
//     </form>
//   );
// }

// export default ContactForm;

import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError} from '@formspree/react';
import styles from './ContactForm.module.css'; 

function ContactForm() {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("mbjnaklr");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      formRef.current.reset();
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
      return () => clearTimeout(timer); 
    }
  }, [state.succeeded]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    await handleSubmit(e);
    setFormData({ email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>
        {showSuccessMessage && <p className={styles.successMessage}>¡Gracias por contactar!</p>}
      </div>
      <form ref={formRef} onSubmit={handleFormSubmit} className={styles.form} id='contact'>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} className={styles.error} />
        <button type="submit" disabled={state.submitting} className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );  
}

export default ContactForm;
