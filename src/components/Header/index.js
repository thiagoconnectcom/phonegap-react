import React, { Component } from 'react';
import './style.css';

//Imagens
import Logo from '../../assets/img/logo.png'

export default class Header extends Component{
      render(){
          return(
              <div className="header">
                 <div>
                     {/* <img source={Logo}/> */}
                 </div>
              </div>
          )
      }
}