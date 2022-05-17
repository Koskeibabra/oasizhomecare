import React, { FunctionComponent} from "react";
// import sgMail from '@sendgrid/mail';
// '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'
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding: 60px 0px 60px 300px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 60px 0px 60px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.largemobile}) {
    padding: 60px 0px 60px 0px;
  }
`;




const CompanyConnect = styled.div`

  #thoughts{
    padding-bottom:150px;
  }
  padding: 40px;

  border-radius: 10px;
  background-color: var(--white-color);

  h4 {
    font-size: 24px;
    font-weight: 700;
    color: #35404e;
    margin-bottom: 25px;
  }
  #text{
    height: 70px;
  }
  p {
    font-size: 14px;
    color: #212529;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .btn-custom {
    max-width:200px;
    border-radius: 5px;
    padding: 12px 30px;
    text-decoration: none;
    text-transform: none;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    outline: 0;
    background: var(--primary-color);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 20px;
  }
`;
const FooterNavigation = styled.div`
h2{
  color: var(--primary-color);

}
i{
  color: var(--secondary-color);

}
#product_nav{
  text-decoration: none;
  list-style: none;
  color:black !important;

  
}
h3 {
    color: var(--secondary-color);
    margin-top: 80px;
  }
.mb-2{
  text-decoration: none;
  list-style: none;
  color:black !important;
}
  h5 {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li,
    li a {
      font-size: 14px;
      color: blac;
      text-decoration: none !important;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }

 


`;


const SectionContactus: FunctionComponent = () => {



  return (
    <Section id="contactus" className="text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <CompanyConnect>
              <h4>In need of a nurse / caregiver?</h4>

        
              <form action="" method="POST" className="row g-3">
              {/* <form className="row g-3"> */}
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_next" value="https://www.oasizhomecare.com/#home"></input>
                <div className="col-md-6">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required={true}
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required={true}
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required={true}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-12">
            
                  <input
                    id="thoughts"
                    type="text"
                    name="text"
                    required={true}
                    className="form-control"
                    placeholder="Share your thoughts"
                  />

               
                </div>
               
                <div className="col-md-12">
                  <button
                    type="submit"
                    // onSubmit={sendEmail}
                    className="btn btn-custom">
                    Send
                  </button>
                </div>
                <div className="col-md-12">
       

                </div>
              </form>
            </CompanyConnect>
          </div>
          <div className="col-md-4">
          <div className="col-md-2 offset-md-2 text-white">
          <FooterNavigation id="product_nav">
            {/* <h2>Address</h2> */}
            <ul className="mb-2" >
            <span>
                  <i className="fa fa-phone-square fa-lg" /> <br />
                  +254791434525
                </span>
              <li>
                <span>
                <i className="fa fa-envelope fa-lg" /> <br />
               oasizhomecare@gmail.com
              </span>
              </li>
              <li>
                <span>
                <i className="fa fa-twitter-square fa-lg mr-2" /><br />
                Oasiz Homecare
              </span>
              </li>
              <li>
                <span>
                <i className="fa fa-instagram fa-lg" /><br />
               Oasiz Homecare
              </span>
              </li>
            </ul>

          </FooterNavigation>
      
        </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { SectionContactus };
