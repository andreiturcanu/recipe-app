import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Default() {
  return (
    <Header title='404' styleClass='default-hero'>
      <h2 className='text-uppercase text-light'>you are in the wrong place</h2>
      <Link to='/' className='text-uppercase btn btn-secondary btn-lg mt-5'>
        return home
      </Link>
    </Header>
  );
}
