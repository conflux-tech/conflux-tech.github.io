import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, upperSubtitle, lowerSubtitle }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h3>{upperSubtitle}</h3>
    <h2 className="section-title">{title}</h2>
    <h3>{lowerSubtitle}</h3>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  upperSubtitle: PropTypes.string,
  lowerSubtitle: PropTypes.string,
};

export default Title;
