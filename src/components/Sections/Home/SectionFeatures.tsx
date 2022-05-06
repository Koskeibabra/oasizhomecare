import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { SectionTitle } from "../Common";

const Section = styled.section`
  padding: 90px 0 90px 0;
  position: relative;
  background: #F5F8FF;
  .text{
    text-align:center;
  }
`;

const Card = styled.div`
  border: none;
  background: transparent;

  .card-icon {
    width: 80px;
    height: 80px;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60%;
    background: var(--secondary-color);
    margin: 0 auto;
  }

  h4 {
    font-size: 19px;
    font-weight: 700;
    color: #35404e;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7em;
    margin-bottom: 20px;

    span {
      color: var(--secondary-color);
    }
  }
`;

const SectionFeatures: FunctionComponent = () => {
  return (
    <Section id="value">
      <div className="container">
        <div className="row align-items-start">
          {/* {--Card-1-Start--} */}
          <SectionTitle className="text">
              Why Us
            </SectionTitle>
          <div className="col-lg-4 col-md-6 col-sm-12">

            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-clock-o bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">AVAILABLE 24/7
</h4>
                    <p className="card-text">
                    We are available 24 hours a day to provide your loved one with a caregiver.                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-1-End--} */}
          {/* {--Card-2-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-calendar-check-o bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">DAILY CARE EXPERTS
</h4>
                    <p className="card-text">
                    We specialize in around the clock care to help seniors live well at home.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-2-End--} */}
          {/* {--Card-3-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-handshake-o bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">SUPPORT</h4>
                    <p className="card-text">
                    We provide long term support and partnership 😉.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-3-End--} */}
          {/* {--Card-4-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-user-md bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">
                      SKILLED NURSES 
</h4>
                    <p className="card-text">
                    Our home health care experts ensure that your loved one’s complex medical needs are met.                     </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-4-End--} */}
          {/* {--Card-5-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-cutlery bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">SUPPORT WITH DIET AND NUTRITION</h4>
                    <p className="card-text">
                    Home care may include nutritional counseling and home-cooked meals to protect your loved ones against malnutrition                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-5-End--} */}
          {/* {--Card-6-Start--} */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card className="card mb-3">
              <div className="row g-0">
                <div className="col-4">
                  <div className="card-icon">
                    <i className="fa fa-heartbeat bg-color text-light" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h4 className="card-title">COGNITIVE THERAPEUTICS</h4>
                    <p className="card-text">
                    Fun yet effective activities designed by experts to keep aging minds sharp                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          {/* {--Card-6-End--} */}
        </div>
      </div>
    </Section>
  );
};
export { SectionFeatures };
