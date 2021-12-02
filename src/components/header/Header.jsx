import React from 'react';
import s from '../header/Header.module.css';
import { NavLink } from 'react-router-dom';
import Container from '../../components/container/Container';

export default function Header() {
  return (
    <Container>
      <header>
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </Container>
  );
}
