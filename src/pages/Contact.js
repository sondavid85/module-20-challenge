import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ subject: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (!value.length) {
      setErrorMessage(`${name} is required.`);
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage && formState.subject && formState.message) {
      const mailtoLink = `mailto:sondavid85@yahoo.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(formState.message)}`;
      window.location.href = mailtoLink;
    } else {
      setErrorMessage('All fields are required.');
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
