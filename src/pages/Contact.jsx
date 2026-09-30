import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you " + name + "!");
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          required
        />

        <textarea
          placeholder="Enter Message"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;