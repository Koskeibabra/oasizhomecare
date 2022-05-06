import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FooterCopyright } from "./FooterCopyright";


const StyledFooter = styled.div`
  background:  var(--primary-color);
  color: var(--white-color);
  padding: 60px 0 20px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-left: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 20px;
  }
`;

const Footer: FunctionComponent = () => {
  return (
    <StyledFooter>
    
      <FooterCopyright />
    </StyledFooter>
  );
};

export { Footer };