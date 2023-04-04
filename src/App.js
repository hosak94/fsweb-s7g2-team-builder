import "./App.css";
import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [takim, setTakim] = useState([
    { isim: "Ali", email: "ali@ornek.com", rol: "Frontend Developer" },
    { isim: "Ayşe", email: "ayse@ornek.com", rol: "Backend Developer" },
    { isim: "Mehmet", email: "mehmet@ornek.com", rol: "Tasarımcı" },
  ]);

  const handleFormSubmit = (newMember) => {
    setTakim([...takim, newMember]);
  };

  return (
    <div className="App">
      <h1>Takım Üyeleri</h1>
      <ul>
        {takim.map((uye, index) => (
          <li key={index}>
            {uye.isim} ({uye.rol}) - {uye.email}
          </li>
        ))}
      </ul>
      <Form onFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
