import React, { useState } from "react";

function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    subject: "",
    email: "",
    textBody: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    textBody: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validateInputLength = (textValue) => {
    const inputLength = textValue.length >= 3;
    return inputLength;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const newErrors = { ...errors };

    switch (name) {
      case "fullName":
      case "subject":
      case "textBody":
        newErrors[name] = validateInputLength(value) ? "" : `${name} is required`;
        break;
      case "email":
        newErrors.email = validateEmail(value) ? "" : "Invalid email address";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidForm = Object.values(errors).every((error) => !error);
    if (isValidForm) {
      console.log("Form submitted:", formState);
    } else {
      console.log("This form has errors. Please correct them.");
    }
  };

  return (
    <div className="contactForm">
      <h1>Contact form:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formState.fullName}
            placeholder="Your full name"
            onChange={handleInputChange}
            onBlur={handleBlur}
            minLength={3}
            aria-label="Full Name"
            required
          />
          <span className="error">{errors.fullName}</span>
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formState.subject}
            placeholder="Subject theme"
            onChange={handleInputChange}
            onBlur={handleBlur}
            minLength={3}
            aria-label="Subject"
            required
          />
          <span className="error">{errors.subject}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={formState.email}
            placeholder="Your Email"
            onChange={handleInputChange}
            onBlur={handleBlur}
            aria-label="Email"
            required
          />
          <span className="error">{errors.email}</span>
        </div>
        <div>
          <label htmlFor="textBody">Body</label>
          <input
            type="text"
            name="textBody"
            value={formState.textBody}
            placeholder="Textual content"
            onChange={handleInputChange}
            minLength={3}
            onBlur={handleBlur}
            aria-label="Body"
            required
          />
          <span className="error">{errors.textBody}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
