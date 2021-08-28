import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      send(
        'service_xahgusa',
        'template_5oqfn46',
        formState,
        'user_7VJgfTzMn2AWqE8nsSTE8'
      )
      .then((response)=> {
        console.log('SUCCESS!', response.status, response.text);
        window.alert('Email successfully sent!');
        window.location.href = '/about';
      })
      .catch((err)=> {
        console.log('FAILED...', err);
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
        <div className="container">
        <div className="about-intro hero-background contact-form">
      <h4>Contact me</h4>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name}  onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="custom-button waves-effect waves-light" type="submit">Submit</button>
      </form>
      </div>
      </div>
    </section>
  );
}

export default ContactForm;