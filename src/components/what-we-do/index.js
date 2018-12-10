import React from 'react';
import Button from '../button';
import './_what-we-do.scss';

const WhatWeDo = props =>
  (<section className="section" id="why-section">
    <div className="container section-content" data-background={props.background} data-text-color={props.textColor}>
      <h3 className="text-center">{props.title}</h3>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-lg-10"><h1 className="text-center">{props.mainText}</h1></div>
      </div>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-lg-6">
          {props.content.map((item, i) =>
            (<p key={i}>
                {item.text}
            </p>),
          )}
          <br />
          <div className="btn-container">
            <Button text="Work with us" link="mailto:info@conflux.tech" />
          </div>
        </div>
      </div>
    </div>
  </section>);

export default WhatWeDo;
