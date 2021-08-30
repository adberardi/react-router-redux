import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";

const Register = () => {
  const [form, SetValue] = useState({
    name: "",
    email: "",
    passw: "",
  });

  const handleInput = (e) => {
    SetValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input className="input" type="text" name="name" onChange={handleInput} placeholder="Nombre" />
          <input className="input" type="text" name="email" onChange={handleInput} placeholder="Correo" />
          <input className="input" type="password" name="passw" onChange={handleInput} placeholder="Contraseña" />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
