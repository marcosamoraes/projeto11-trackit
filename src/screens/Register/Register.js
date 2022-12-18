import { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { Container, Link } from './Register.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    'email': '',
    'password': '',
    'name': '',
    'image': '',
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios.post('/auth/sign-up', {
      email: form.email,
      password: form.password,
      name: form.name,
      image: form.image,
    })
      .then(res => {
        navigate('/');
      })
      .catch(err => {
        alert('Falha ao realizar cadastro.')
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" name="email" placeholder="email" onChange={e => setForm({...form, email: e.target.value})} disabled={isLoading ?? false} required/>
        <input type="password" name="password" placeholder="senha" onChange={e => setForm({...form, password: e.target.value})} disabled={isLoading ?? false} required/>
        <input type="text" name="name" placeholder="nome" onChange={e => setForm({...form, name: e.target.value})} disabled={isLoading ?? false} required/>
        <input type="text" name="image" placeholder="foto" onChange={e => setForm({...form, image: e.target.value})} disabled={isLoading ?? false} required/>
        <Button type='submit' className='w-100' isLoading={isLoading} text="Cadastrar" />
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </form>
    </Container>
  )
}