import React from 'react';
import './_about.scss';

const AboutUs = props =>
  (<section className="section" id="about-section" >
    <div className="container section-content" data-background={props.background} data-text-color={props.textColor}>
      <h3 className="text-center">{props.title}</h3>
      <br />
      <h1 className="text-center">{props.mainText}</h1>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-lg-6">
          {props.content.map((item, i) =>
            (<p key={i}>
                {item.text}
            </p>),
          )}
        </div>
      </div>
    </div>
  </section>);

export default AboutUs;
