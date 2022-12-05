import React from 'react';
import '../App.css';

import logo_png from './logo.png'

const HeaderSection= () => {
  return (<div className='Header'><img src={logo_png} alt="logo" width="20%"></img>
    <input type="text" placeholder="Szukaj..." className='SearchBar'/><button className='SearchButton'>Zaloguj</button></div>
  );
};

export default HeaderSection;