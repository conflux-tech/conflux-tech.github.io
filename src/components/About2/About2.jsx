import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const About2 = () => {
  const { about2 } = useContext(PortfolioContext);
  const { title, paragraphOne, paragraphTwo, businesses } = about2;

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

  let businessToRender;
  if (businesses) {
    businessToRender = businesses.map((data) => {
      return (
        <li key={data.id} className="about2-business">
          <h2 className="about2-business-title">{data.title}</h2>
          <h3 className="about2-business-subtitle">{data.subtitle}</h3>
          <p className="about2-business-description">{data.description}</p>
        </li>
      );
    });
  }

  return (
    <section id="about2">
      <Container>
        <Row className="about2-wrapper">
          <Col md={6} sm={12} className="about2-wrapper__left">
            <div className="about-wrapper__info">
              <h1>{title}</h1>
              <p className="about-wrapper__info-text">{paragraphOne}</p>
              <p className="about-wrapper__info-text">{paragraphTwo}</p>
            </div>
          </Col>
          <Col md={6} sm={12} className="about2-wrapper__right">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={100} distance="30px">
              <div className="about-wrapper__info">{businessToRender}</div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About2;
