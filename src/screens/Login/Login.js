import { useContext, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { Container, Link } from './Login.styled';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../contexts/auth';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    'email': '',
    'password': '',
  });

  const { setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios.post('/auth/login', {
      email: form.email,
      password: form.password,
    })
      .then(({data}) => {
        setToken(data.token);
        navigate('/hoje');
      })
      .catch(err => {
        alert('Falha ao realizar login.')
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" name="email" placeholder="email" onChange={e => setForm({...form, email: e.target.value})} />
        <input type="password" name="password" placeholder="senha" onChange={e => setForm({...form, password: e.target.value})} />
        <Button type='submit' className='w-100' isLoading={isLoading} text="Entrar" />
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </form>
    </Container>
  )
}