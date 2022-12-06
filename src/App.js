import React from 'react';

import './App.css';
import { Brand, CTA, NavBar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <NavBar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App


// run - npm run build to buld the site for hosting on internet after the bug is fixed
