import React from 'react';

import './_hero.scss';

const Hero = props =>
  (<section id="hero-section" className="section">
    <div className="container section-content text-center" data-background={props.background}>
      <div className="row justify-content-md-center">
        <div className="col-lg-8">
        <span>{props.text}</span>
      </div>
      </div>
      <section id="scroll">
        <a href="#" id="scroll-to"><span></span></a>
      </section>
    </div>
  </section>);

export default Hero;
