import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Row className="footer-wrapper">
          <Col md={6} sm={12} className="footer-wrapper__left">
            <h1>Every idea starts with a conversation,</h1>
            <h1>
              <a href="mailto:info@conflux.tech">let&apos;s have one</a>
            </h1>
          </Col>
          <Col md={6} sm={12} className="footer-wrapper__right">
            <h1>
              Email us at: <a href="mailto:info@conflux.tech">info@conflux.tech</a>
            </h1>
            <div className="social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12}>
            <p className="footer__text">© {new Date().getFullYear()} Conflux</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
