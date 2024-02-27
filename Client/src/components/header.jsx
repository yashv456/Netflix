import React from 'react';
import logo from '../assets/logo.png';
import { Container } from './headerstyle';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
    </Container>
  );
}
