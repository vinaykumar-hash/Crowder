import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Header1 from '../components/Header1';
import SplitText from '../components/Splitext';
import TrueFocus from '../components/Truefocus';
const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <Header />
      {user ? (
        <Header1 />
      ) : (<></>)}
      <div className='fustat w-full text-center pt-2 bg-green-200'>
        <SplitText

          text="Because we think everyone deserve Recognition"

          className=" text-center fustat"

          delay={20}

          duration={0.2}

          ease="power3.out"

          splitType="chars"

          from={{ opacity: 0, y: 40 }}

          to={{ opacity: 1, y: 0 }}

          threshold={0.1}

          rootMargin="-100px"

          textAlign="center"

        />
      </div>
      <Hero />
      <div className='fustat flex justify-start items-start w-full px-40 h-screen pt-20'>
        <TrueFocus 

          sentence="Find the Future"

          manualMode={true}

          blurAmount={5}

          borderColor="#A0C878"

          animationDuration={0.5}

          pauseBetweenAnimations={1}

          />
      </div>
    </>
  )
}

export default Home