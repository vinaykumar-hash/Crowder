import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Header1 from '../components/Header1';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
    <Header/>
    {user ? (
        <Header1/>
    ) : (<></>)}
    <Hero/>
    </>
  )
}

export default Home