import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
<section class="register">
    <section class="register__container">
      <h2>Regístrate</h2>
      <form class="register__container--form">
        <input class="input" type="text" placeholder="Nombre" />
        <input class="input" type="text" placeholder="Correo" />
        <input class="input" type="password" placeholder="Contraseña" />
        <button class="button">Registrarme</button>
      </form>
      <a href="">Iniciar sesión</a>
    </section>
  </section>
);


export default Register;
