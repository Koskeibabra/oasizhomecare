import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { SectionTitle } from "../Common";
import Image from "next/image";
// import Fade from "react-reveal/Fade";

const Section = styled.section`
  #center-text{
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      justify-content: start;
  } 
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      justify-content: start;
  } 

}
  .voucher-image{
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    /* margin-top: 50px; */
    min-width: 500px;
    margin-left: -60px;
  }
  
  }
  padding-left: 10%;
  padding: 90px 0 90px 0;
  position: relative;
  background: #fff;
`;

const SectionImageFeature = styled.div`
  margin-bottom: 60px;

  h3{
    padding-bottom:30px;
    
  }
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -1px;

    span {
      color: var(--primary-color);
    }
  }
  .justify{
    text-align: justify;
    font-size: 20px;
    padding-bottom:20px ;
    padding-top:20px ;
  }
  
  .cta-button {
      padding: 12px 30px;
      min-width: 120px;
      outline: 0;
      font-weight: 700;
      font-size: 14px;
      color: var(--white-color);
      background: var(--primary-color);
      text-decoration: none;
      border-radius: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      margin-top: 20px;
  } 

      &:hover {
        box-shadow: 2px 2px 20px 0 rgb(20 20 20 / 30%);
      }
    }
  

  ul {
    list-style: none;
    padding-left: 12px;
    margin-top: 20px;
    margin-bottom: 1rem;

    li {
      position: relative;
      text-align: left;
      padding-left: 20px;
      font-size: 21px;
      font-weight: 700;
      line-height: 1.5;
      color: #35404e;

      &:after {
      
        display: block;
        width: 21px;
        height: 25px;
        position: absolute;
        top: 0px;
        left: -10px;
      }

      &:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100px;
        width: 7px;
        height: 7px;
        background: #312f2f;
        left: 0px;
        top: calc(1em - 5px);
        z-index: 5;
      }
      
    }
    
  }
`;

const SectionServices: FunctionComponent = () => {
  return (
    <Section id="services">
      <div className="container">
        <div className="row align-items-center">
    
        </div>
       
      </div>
      <SectionImageFeature >
                <SectionTitle className="text-center">
              Services
            </SectionTitle>
            <div className="voucher-image">
        <Image
                  src={"/images/oasiz-img/service.png"}
                  width="200px"
                  height="100px"
                  layout="responsive"
                  objectFit="contain"
                  priority={true}
                  alt={""}
                />
                </div>
        </SectionImageFeature>

       
      
    </Section>
  );
};

export { SectionServices };
