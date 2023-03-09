import { useState } from "react";
import InputWithIcon from "../../components/InputWithIcon";
import Button from "../../components/Button";
import { CreateUserWrapper } from "./styles";

import UserIcon from '../../assets/icons/user.png';
import UsersIcon from '../../assets/icons/users.png';
import MailIcon from '../../assets/icons/mail.png';
import { newUser } from "../../services/api";
import { toastError, toastSuccess } from "../../utils/toast";
import { Toaster } from "react-hot-toast";

export default function CreateUser() {
  const [permissions, setPermissions] = useState([
    'Administrador', 'Permissão #2', 'Gerente', 'Permissão #3', 'Permissão #1', 'Permissão #4'
  ])

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    newUser({ name, last_name: lastName, email }).then(() => {
      toastSuccess("Usuário cadastrado com sucesso!");

      setIsLoading(false);
      setName('');
      setEmail('');
      setLastName('');
    }).catch(err => {
      toastError("Erro ao cadastrar usuário");
      setIsLoading(false);
      console.log(err);
    });
  }

  return (
    <CreateUserWrapper>
      <Toaster position="top-right" reverseOrder={false} />

      <h1>Cadastrar novo usuário</h1>
      <p>Preencha os campos corretamente</p>

      <form onSubmit={handleSubmit}>
        <span className="row">
          <InputWithIcon
            placeholder="Insira o nome"
            label="Nome"
            left={{ src: UserIcon }}
            value={name} setValue={setName}
          />
</span>
<span className="row">
          <InputWithIcon
            placeholder="Insira o sobrenome"
            label="Sobrenome"
            left={{ src: UsersIcon }}
            value={lastName} setValue={setLastName}
          />
        </span>

        <InputWithIcon
          placeholder="Insira o e-mail"
          label="E-mail"
          left={{ src: MailIcon }}
          value={email} setValue={setEmail}
        />

        <h2>Permissões</h2>

        <div className="permissions">
          {permissions.map((permission, index) =>
            <label key={index}>
              <input type="checkbox" />{permission}
            </label>
          )}
        </div>

        <Button disabled={isLoading} text="Cadastrar" color="branding" />
      </form>
    </CreateUserWrapper>
  )
}
