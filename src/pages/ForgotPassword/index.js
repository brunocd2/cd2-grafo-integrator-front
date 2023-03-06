import { useEffect, useState } from "react";

import { ForgotPasswordContainer } from "./styles";
import Logo from '../../assets/logoMobile.png';
import InputWithIcon from "../../components/InputWithIcon";
import MailIcon from '../../assets/icons/mail.png';
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    if (e) e.preventDefault();

    if (!email) {
      setError('É necessário digitar um email!');
    } else {
      forgotPassword(email).then(() => {
        alert('Email enviado com sucesso!');
      }).catch(err => {
        setError('Verifique o email digitado!');
        console.log(err);
      })
    }
  }

  useEffect(() => {
    setError('');
  }, [email]);

  return (
    <ForgotPasswordContainer>
      <img src={Logo} alt="domazzi" />

      <form onSubmit={handleSubmit}>
        <h2>Esqueceu a senha?</h2>
        <p>Não se preocupe, informe um  e-mail para receber um novo acesso.</p>

        <InputWithIcon
          label="E-mail" placeholder="Insira seu e-mail"
          value={email} setValue={setEmail} type="email"
          left={{ src: MailIcon }}
          onEnter={handleSubmit}
        />

        {error && <span className="error">{error}</span>}

        <button>Enviar</button>

        <Link to="/">
          <span>&lt;</span>Voltar para o login
        </Link>
      </form>
    </ForgotPasswordContainer>
  )
}