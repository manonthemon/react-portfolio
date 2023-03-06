import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div className="form-container">
        <h2 className="title">Contact me</h2>
    <form onSubmit={submit}>
      <h3>Name</h3>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <h3>Email</h3>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <h3>Message</h3>
        <textarea className="message-field" type="text-field" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button className = "button btn-primary btn-lg" button type="submit">Send</button>
    </form>
    </div>
  );
}

export default Contact;
