import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { useScroll } from "src/hooks/useScroll";
import Link from "next/link";





const HeaderNavigation = styled.div<{ isNavbarScrollTop: boolean }>`
  transition: 0.7s all ease;
  background: var(--white-color);

  ${({ isNavbarScrollTop }) =>
    isNavbarScrollTop &&
    css`
      /* background: var(--white-color); */
      box-shadow: 0 4px 6px 0 rgb(10 10 10 / 20%);
      scroll-behaviour: smooth;
    `}

  nav {
    /* background: var(--white-color); */
    padding: 0;
    box-shadow: 0 0 15px 15px solid #000;
  }
  

 
                                                                                      
  .navlinks{
    margin-left: 180px;
  }
  #logo{
    margin-left: -30px;
    @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
     
    
      
    }
  }

  .btn-custom {
    text-decoration: none;
    text-transform: none;
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
    min-width: 130px;
    background: var(--primary-color);
    border-radius: 5px;
    margin-left: 150px;

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
     
     min-width: 130px;
     margin-left: 120;
      
    }

    &:hover {
          background: var( --secondary-color);
          /* color: white; */
        }
  }
 

  #navbarContent {
    ul li a {
      color: var( --secondary-color);
      font-weight: 600;
      transition: 0.3s;
     
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    #navbarContent {
      ul {
        margin-left: 30px;
      }
    }
    #navbarContent {
      ul li a {
        display: inline-block;
        padding: 30px 18px;
        padding-top: 29px;
        text-decoration: none;
        text-align: center;
        outline: 0;
        line-height: 0;


        &:hover {
          color:var(--primary-color)
        // border-bottom: 3px solid #760b73;
  }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background: var(--white-color);
    .navbar-brand {
      img {
        width: 185px !important;
      }
    }
    .navbar-collapse {
      padding-bottom: 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.largemobile}) {
    background: var(--white-color);
    .navbar-brand {
      img {
        width: 185px !important;
      }
    }
    .navbar-collapse {
      padding-bottom: 15px;
    }
  }
`;

const Navigation: FunctionComponent = () => {
  const { scrollTop } = useScroll();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleOnClickShowMenu = () => setShowMenu((prevState) => !prevState);

  const isNavbarScrollTop = Boolean(scrollTop);


  
  return (
    <HeaderNavigation
      className="fixed-top"
      isNavbarScrollTop={isNavbarScrollTop}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link href="/">
                  <a className="navbar-brand" id="logo">
                    {/* add logo */}
                    <Image
                      src={"/images/oasiz-img/Oasiz_Logo.png"}
                      width={"180px"}
                      height={"70px"}
                      alt={""}
                    />
                  </a>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                  onClick={handleOnClickShowMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`navbar-collapse collapse ${
                    showMenu ? "show" : ""
                  }`}
                  id="navbarContent"
                  
                >
                  <div className="navlinks"  onClick={handleOnClickShowMenu}>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link href="/#home">
                        <a className="nav-link active" aria-current="page">
                          Home
                        </a>
                      </Link>
                    </li>
                    <div className="dropdown">
              
                    <li className="nav-item">
                      <Link href="/#about">
                        <a className="nav-link">About Us
                        {/* <i className="fa fa-chevron-circle-down" aria-hidden="true"></i> */}
                        </a>
                      </Link>
                    </li>
                  
                
                  </div>
                  
                      
                    <li className="nav-item">
                      <Link href="/#services">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#value">
                        <a className="nav-link">Why Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#contactus">
                        <a className="nav-link">Contact </a>
                      </Link>
                    </li>
                  </ul>
                  
                  </div>
                  <form className="d-flex">
                    <Link href="/#contactus">
                      <a className="btn btn-custom">
                        <i className="" /> Reach us
                      </a>
                    </Link>
                 
                  </form>

                </div>
                
        
                        
              </div>
            </nav>
          </div>
        </div>

      </div>
    </HeaderNavigation>
  );
};

export { Navigation };
