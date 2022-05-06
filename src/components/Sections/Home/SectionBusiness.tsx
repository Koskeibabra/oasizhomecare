import React, { FunctionComponent } from "react";
import styled from "styled-components";
// import { SectionTitle } from "../Common";
import Fade from "react-reveal/Fade";

const Section = styled.section`
background:#F5F8FF;

#for-biz{
 
  padding-left:10%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-left:5%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left:5%;
  }



}
  .text-start{
    padding-left:60px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      padding-left:0px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      padding-left:0px;
    }
  }
  .justify{
    text-align: justify;
    font-weight:1000px;
    font-size: 20px;
    padding-bottom:20px ;
    padding-top:20px ;
  }
  #app{
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    /* margin-left: 100px; */
    margin-top: 30px;
    width: 1000px;
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
     width: 1000px;
  }
  }
  padding: 90px 0 90px 0;
  position: relative;
  // background: url("/images/background/6.png") center center / cover;
  padding-right: 8%;

`;

const SectionImageFeature = styled.div`
  
  margin-bottom: 60px;

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 700;
    justify-content:center;
    align-items:center;
    text-align: center;
    span {
      color: var(--primary-color);
    }
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
        list-style: none;
        position: relative;
        text-align: left;
        padding-left: 20px;
        font-size: 21px;
        font-weight: 700;
        line-height: 2;
        color: #35404e;
  
        &:after {
          content: "✔️";
          // content: '✓';
          display: block;
          width: 21px;
          height: 25px;
          position: absolute;
          top: 0px;
          left: -15px;
        }
  
        &:before {
          content: "";
          display: block;
          position: absolute;
          border-radius: 1px;
          width: 4px;
          height: 4px; 
          left: 0px;
          top: calc(1em - 5px);
          z-index: 5;
        }
    }
  }
`;



const SectionBusiness: FunctionComponent = () => {
  return (
    <Section id="about">


        <div>
        <SectionImageFeature className="row align-items-center" id="business">
          <div className="col-lg-text-center" id="for-biz">
            <Fade right duration={700}>
              <h3>
                About Us
              </h3> 
              <p className="justify">We offer a variety of health care services to seniors and adults with both physical and mild learning disabilities. Our services are customised to every individual through a Personal Care Plan and are provided by highly-trained CareGivers who are the best in the business.</p>
              <ul>
                <li>Our Clients receive the full time that they pay for, as we travel in our own time.</li>
                <li>
                Visits are never rushed – our preferred visit time is a minimum of one hour.
                </li>
                <li>
                CareGivers are carefully matched and, if time allows, introduced before they begin delivering care.
                </li>
                <li>
                We are quick to react, vigilant in our duty of care and always aim to raise a smile.
                </li>
              </ul>
            </Fade>
          </div>

        </SectionImageFeature>
        </div>
        
   
    </Section>
  );
};

export { SectionBusiness };
