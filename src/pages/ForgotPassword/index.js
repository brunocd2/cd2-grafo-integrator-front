import { useEffect, useState } from "react";

import { ForgotPasswordContainer } from "./styles";
import Logo from '../../assets/logoMobile.png';
import InputWithIcon from "../../components/InputWithIcon";
import MailIcon from '../../assets/icons/mail.png';
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/api";

import { Toaster } from "react-hot-toast";
import { toastError, toastSuccess } from "../../utils/toast";

import Loading from "../../components/Loading";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    if (e) e.preventDefault();

    if (!email) {
      setError('É necessário digitar um email!');
    } else {
      forgotPassword(email).then(() => {
        toastSuccess("E-mail enviado com sucesso!");
        setIsLoading(false);
        setEmail('');
      }).catch(err => {
        setError('Verifique o email digitado!');
        toastError("Erro ao enviar e-mail");
        setIsLoading(false);

        // console.log(err);
      })
    }
  }

  useEffect(() => {
    setError('');
  }, [email]);

  return (
    <ForgotPasswordContainer>
      <Toaster position="top-right" reverseOrder={false} />

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

        <button disabled={isLoading}>Enviar</button>

        <Link to="/">
          <span>&lt;</span>Voltar para o login
        </Link>

        <Loading isLoading={isLoading} size={26} />
      </form>
    </ForgotPasswordContainer>
  )
}