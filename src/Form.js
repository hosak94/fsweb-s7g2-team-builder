import React, { useState } from "react";

function Form() {
  const [isim, setIsim] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`İsim: ${isim}, Email: ${email}, Rol: ${rol}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="isim">İsim:</label>
      <input
        id="isim"
        type="text"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="rol">Rol:</label>
      <input
        id="rol"
        type="text"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
      />

      <button type="submit">Gönder</button>
    </form>
  );
}

export default Form;
