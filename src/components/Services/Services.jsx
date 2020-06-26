import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Services = () => {
  const { services } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="services">
      <Container>
        <div className="service-wrapper">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="service-wrapper__title">
              we have the skills
              <br />
              you need
            </h1>
            <hr className="title-divider__pink" />
            <h3 className="service-wrapper__subtitle">
              We create products from the ground up. Research, UI/UX design, web and mobile software
              development.
            </h3>
          </Fade>
          {services.map((service) => {
            const { title, description } = service;

            return (
              <Row>
                <Col lg={12} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="service-wrapper__text">
                      <h3 className="service-wrapper__text-title">{title || 'Service Title'}</h3>
                      <div className="service-wrapper__text-description">
                        <p>
                          {description ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                      </div>
                      <Row className="service-tool">
                        {service.tools.map((tool) => {
                          return (
                            <Col lg={4} xs={12}>
                              <div>
                                <p>
                                  <strong>{tool.name}</strong>
                                </p>
                                <p className="service-tool__description">
                                  <small>{tool.description}</small>
                                </p>
                              </div>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
