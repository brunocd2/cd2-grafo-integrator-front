import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginLeftWrapper, LoginRightWrapper } from "./styles";

import Logo from '../../assets/logo.png';
import LogoMobile from '../../assets/logoMobile.png';
import MailIcon from '../../assets/icons/mail.png';
import VisibilityIcon from '../../assets/icons/visibility.png';
import VisibilityOffIcon from '../../assets/icons/visibility_off.png';
import LockIcon from '../../assets/icons/lock.png';
import InputWithIcon from "../../components/InputWithIcon";
import Button from "../../components/Button";
import { getAllProducts, login } from "../../services/api";
import { GlobalContext } from '../../contexts/global';
import Loading from "../../components/Loading";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setProducts } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleChangeVisibility() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    //--- Waiting login access to test ---\\

    login({
      email,
      password
    }).then(success => {
    getAllProducts().then(products => {
      setIsLoading(false);
      setProducts(products);
      navigate('/dashboard');
    });
    }).catch(error => {
      alert('Falha ao logar, verifique as credenciais!');
      setIsLoading(false);
      console.log(error);
    });
  }

  return (
    <>
      <LoginLeftWrapper>
        <img src={Logo} alt="domazzi" />
        <h2>Bem vindo(a) ao <br /> Portal Domazzi.</h2>
      </LoginLeftWrapper>
      <LoginRightWrapper>
        <img src={LogoMobile} alt="domazzi" />
        <h2>Insira os dados para <br /> acessar a aplicação.</h2>
        <form onSubmit={handleSubmit}>
          <InputWithIcon
            label="E-mail" placeholder="Insira seu e-mail"
            value={email} setValue={setEmail}
            left={{ src: MailIcon }}
          />
          <InputWithIcon
            label="Senha" placeholder="Insira sua senha"
            value={password} setValue={setPassword}
            left={{ src: LockIcon, }}
            right={{
              src: showPassword ? VisibilityOffIcon : VisibilityIcon,
              onClick: handleChangeVisibility
            }}
            type={showPassword ? 'text' : 'password'}
          />

          <Link to="/nova-senha">Esqueceu a senha?</Link>
          <Button color="branding" text="Acessar" />
        </form>

        <Loading isLoading={isLoading} />
      </LoginRightWrapper>
    </>
  )
}