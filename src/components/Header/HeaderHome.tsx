
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";
// import Fade from "react-reveal/Fade";
// import Zoom from 'react-reveal/Zoom';
// import {useTranslations} from 'use-intl';



const Header = styled.header`

 
   #col-lg-6{
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      /* padding-top: 120px; */
      margin-top: 100px;
      margin-left: -90px;
      height: 300px;
      width: 500px;
      
  }
    }
  position: relative;
  padding: 90px 0 90px 0;
  height:800px;
  // background: linear-gradient(rgba(0,0,0,0.6),(rgba(0,0,0,0.3));
  /* background:url("/images/oasiz-img/chw.jpg") center center / cover;; */
  // background-size: cover;
  // background-attachment: fixed;
  // background-position: center center;
  // background-repeat: no-repeat;


  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 120px;
    
  }
`;

const HeaderContent = styled.div`

z-index: 1;
position: relative;
padding-left: 17%;
padding-top:200px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 2%;

  }

  .head{
    font-size:30px ;
    color:var(--white-color);
    margin-bottom:20px;
  }
  h1 {
    color: var(--secondary-color);
    text-shadow: 1px 1px  5px #000;

    font-size: 47px;
    font-weight: 700;
    line-height: 68px;
    margin-top: 0;
    margin-bottom: 10px;
    // padding:5px ;
    margin-bottom:20px;


    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size:40px ;

    .head{
      font-size:10px ;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size:40px ;
    letter-spacing: 1px;

    .head{
      font-size:10px ;
      letter-spacing: 1px;
    }
  }
    span {
      color: var(--primary-color);
    }
  }

  p {
    font-size: 17px;
    line-height: 1.7em;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .cta-wrapper {
    display: flex;

    .cta-button {
      padding: 12px 30px;
      
      min-width: 120px;
      outline: 0;
      font-weight: 700;
      font-size: 16px;
      color: var(--white-color);
      background: var(--primary-color);
      text-decoration: none;
      border-radius: 5px;
 
      &:hover {
        box-shadow: 2px 2px 20px 0 rgb(20 20 20 / 30%);
        background: var(--secondary-color);
        transition: 0.7s all ease;
      }
    }
  }
`;



const HeaderHome: FunctionComponent = () => {

  // const t = useTranslations();

  return (
    <Header id="home">
      <div className="container-fluid">
        <div className="row align-items-center">
        <Image className="hero-img"
               src={"/images/oasiz-img/chw.jpg"}
               width={"800px"}
               height={"532px"}
               alt={""}
               layout="fill"
               objectFit="cover"
               objectPosition="center"
               priority={true}
                />
          <div className="col-lg-6">
            {/* <Fade right duration={1000}> */}
              <HeaderContent>
                
            <h1 >
            {/* {t('home.tagline')} */}
            Providing HealthCare <br /> At Your Doorstep
            {/* PROVIDING HEALTHCARE AT YOUR DOORSTEP */}
                   </h1 >
                   <h2 className="head">
              
                </h2>
      
                <div className="cta-wrapper">
                  <a className="cta-button " href="#about">
                    Learn More
                  </a>

                </div>
              </HeaderContent>
          </div>
        </div>
      </div>
    </Header>
  );
};

export { HeaderHome };

