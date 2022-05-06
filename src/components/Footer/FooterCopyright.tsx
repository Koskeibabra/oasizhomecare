import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Copyright = styled.span`
  color: var(--white-color);
  font-size: 14px;
`;


const SocialLinks = styled.div`
  display: inline-block;
  i {
    text-shadow: none;
    color: var(--white-color);
    padding: 12px 10px 8px 10px;
    width: 34px;
    height: 34px;
    text-align: center;
    font-size: 16px;
    border-radius: 60px;
    margin: 0 5px 0 5px;
    background: var(--secondary-color);
  
    &:hover{
      color: var(--primary-color);  
      background: var(--white-color);
      border-color: #eceff3;
    }
  }
  
`;

const FooterCopyright: FunctionComponent = () => {
  return (
    <div className="container" id="/#contact">
      <div className="row">
        <div className="col-md-6 text-md-start text-sm-center mb-sm-4">
          <Copyright>
            © Copyright 2022 - Oasiz homecare . All Rights Reserved
          </Copyright>
          <div>
    
          </div>
        </div>

        <div className="col-md-6 text-md-end text-sm-center">
          <SocialLinks>
              <a
                href="https://mobile.twitter.com/oasizhomecare"
              >
                <i className="fa fa-twitter fa-lg" />
               
              </a> 
              <a
                href="https://www.instagram.com/oasizhomecare/"
              >
                <i className="fa fa-instagram fa-lg" />
               
              </a> 

          </SocialLinks>
        </div>
      </div>
    </div>
  );
};

export { FooterCopyright };