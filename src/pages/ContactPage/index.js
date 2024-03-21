import React, { useState } from "react";
// import Layout from "../../components/PageLayout";

function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    subject: "",
    email: "",
    textBody: "",
  });
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(formState.email)) {
      setIsValid(true);
      console.log(formState);
    } else {
      setIsValid(false);
      console.log("Invalid email, no action taken.");
    }
  };

  return (
    <div>
      {/* <Layout /> */}
      <form onSubmit={handleSubmit}>
        <h2>Full name</h2>
        <input name="fullName" value={formState.fullName} placeholder="Your full name" onChange={handleInputChange} minLength={3} required />
        <h2>Subject</h2>
        <input name="subject" value={formState.subject} placeholder="Subject theme" onChange={handleInputChange} minLength={3} required />
        <h2>Email</h2>
        <input name="email" value={formState.email} placeholder="Your Email" onChange={handleInputChange} required />
        <p>{isValid ? "" : "Email is invalid."}</p>
        <h2>Body</h2>
        <input name="textBody" value={formState.textBody} placeholder="Textual content" onChange={handleInputChange} minLength={3} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;

// import React, { useState } from "react";
// import Layout from "../../components/PageLayout";

// function ContactPage() {
//   const [fullName, setFullName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [email, setEmail] = useState("");
//   const [textBody, setTextBody] = useState("");
//   const [isValid, setIsValid] = useState(false);

//   function onFullNameChange(event) {
//     setFullName(event.target.value);
//   }
//   function onSubjectChange(event) {
//     setSubject(event.target.value);
//   }
//   // function onEmailChange(event) {
//   //   setEmail(event.target.value);
//   // }
//   function onTextBodyChange(event) {
//     setTextBody(event.target.value);
//   }

//   function validateEmail(event) {
//     const emailRegex = /\S+@\S+\.\S+/;
//     const email = event.target.value;
//     if (emailRegex.test(email)) {
//       setIsValid(true);
//       console.log("true");
//     } else {
//       setIsValid(false);
//       console.log("false");
//     }
//     setEmail(email);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (isValid) {
//       console.log("Full Name:", fullName);
//       console.log("Subject:", subject);
//       console.log("Email:", email);
//       console.log("Text Body:", textBody);
//     } else {
//       console.log("Invalid email, no action taken.");
//     }
//   };

//   return (
//     <div>
//       <Layout />
//       <form onSubmit={handleSubmit}>
//         <h2>Full name</h2>
//         <input value={fullName} placeholder="Your full name" onChange={onFullNameChange} minLength={3} required></input>
//         <h2>Subject</h2>
//         <input value={subject} placeholder="Subject theme" onChange={onSubjectChange} minLength={3} required></input>
//         <h2>Email</h2>
//         <input value={email} placeholder="Your Email" onChange={validateEmail} required></input>
//         {isValid ? <p>Email is valid!</p> : <p>Email is invalid.</p>}
//         <h2>Body</h2>
//         <textarea value={textBody} placeholder="Textual content" onChange={onTextBodyChange} minLength={3} required></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactPage;
