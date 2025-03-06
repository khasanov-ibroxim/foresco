import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import "../../../css/contact-form.css"; // You'll need to create this CSS file

const ContactForm = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    file: null as File | null,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show success message
    setShowSuccess(true);

    // Hide success message after 3.5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3500);

    // Telegram bot integration
    const botToken = "7973033694:AAFYcDlXn39x35ddcxLPJsX6ZsaUiyIEiCk";
    const chatId = "6392542039";

    // Create the message text
    const textMessage = `📩 *New Contact Form Submission*\n\n` +
      `👤 *Name:* ${formData.firstName} ${formData.lastName}\n` +
      `✉ *Email:* ${formData.email}\n` +
      `📝 *Message:* ${formData.message}`;

    // Send text message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: textMessage, parse_mode: "Markdown" })
    }).then(response => response.json())
      .then(data => console.log("Message sent:", data))
      .catch(error => console.error("Error sending message:", error));

    // Send file if one was selected
    if (formData.file) {
      const fileFormData = new FormData();
      fileFormData.append("chat_id", chatId);
      fileFormData.append("document", formData.file);

      fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: "POST",
        body: fileFormData
      }).then(response => response.json())
        .then(data => console.log("File sent:", data))
        .catch(error => console.error("Error sending file:", error));
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      file: null,
    });
  };

  return (
    <Box className={`contact-form-wrapper ${darkMode ? "dark" : ""}`}>
      <header>
        <div className="container">
          <ul>
            <li>
              <span className="nav-link theme-toggle" onClick={toggleTheme}>
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
              </span>
            </li>
          </ul>
        </div>
      </header>

      <main className="section-wrapper">
        <section className="contact">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="contact-heading">
                  <h1>Get in touch<span>.</span></h1>
                  <p className="text">
                    Or reach us via : <a href="mailto:shavgoniaziz@gmail.com">shavgoniaziz@gmail.com</a>
                  </p>
                </div>
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                  <div className={`input-wrap ${formData.firstName ? "not-empty" : ""}`}>
                    <input
                      className="contact-input"
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={(e) => e.currentTarget.parentElement?.classList.add("focus")}
                      onBlur={(e) => e.currentTarget.parentElement?.classList.remove("focus")}
                    />
                    <label htmlFor="firstName">First Name</label>
                    <i className="icon fa-solid fa-address-card"></i>
                  </div>
                  <div className={`input-wrap ${formData.lastName ? "not-empty" : ""}`}>
                    <input
                      className="contact-input"
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={(e) => e.currentTarget.parentElement?.classList.add("focus")}
                      onBlur={(e) => e.currentTarget.parentElement?.classList.remove("focus")}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <i className="icon fa-solid fa-address-card"></i>
                  </div>
                  <div className={`input-wrap w-100 ${formData.email ? "not-empty" : ""}`}>
                    <input
                      className="contact-input"
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={(e) => e.currentTarget.parentElement?.classList.add("focus")}
                      onBlur={(e) => e.currentTarget.parentElement?.classList.remove("focus")}
                    />
                    <label htmlFor="email">Email</label>
                    <i className="icon fa-solid fa-envelope"></i>
                  </div>
                  <div className={`input-wrap textarea w-100 ${formData.message ? "not-empty" : ""}`}>
                    <textarea
                      id="message"
                      className="contact-input"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={(e) => e.currentTarget.parentElement?.classList.add("focus")}
                      onBlur={(e) => e.currentTarget.parentElement?.classList.remove("focus")}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <i className="icon fa-solid fa-inbox"></i>
                  </div>
                  <div className="contact-buttons">
                    <button className="btn upload" type="button" onClick={() => fileInputRef.current?.click()}>
                      <span>
                        <i className="fa-solid fa-paperclip"></i> Add attachment
                      </span>
                      <input
                        type="file"
                        id="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, opacity: 0, cursor: "pointer" }}
                      />
                    </button>
                    <button type="submit" className="btn">Send Message</button>
                  </div>
                </form>
                <div className={`success-message ${showSuccess ? "show" : ""}`}>
                  Message Sent! ✅
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Box>
  );
};

export default ContactForm;