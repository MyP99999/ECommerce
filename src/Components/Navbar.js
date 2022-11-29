import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expend-sm bg-primary navbar-dark px-sm-5'>
          <Link to='/'>
            <img src={logo} alt="store" className='navbar-brand' />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className='nav-item ml-5'></li>
            <Link to='/' className='nav-link'>
              products
            </Link>
          </ul>
          <Link to='/cart' className='ml-auto'>
            <ButtonContainer>
              <span>
                <i className="fas fa-cart-plus"></i>
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </nav>
      </div>
    )
  }
}

