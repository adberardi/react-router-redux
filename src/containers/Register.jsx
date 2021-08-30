import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";
import { registerRequest } from "../actions";

const Register = (props) => {
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
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="Nombre"
          />
          <input
            className="input"
            type="text"
            name="email"
            onChange={handleInput}
            placeholder="Correo"
          />
          <input
            className="input"
            type="password"
            name="passw"
            onChange={handleInput}
            placeholder="Contraseña"
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null,mapDispatchToProps)(Register);
