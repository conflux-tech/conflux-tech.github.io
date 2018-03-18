import React from 'react';

const WhatWeDo = props =>
  (<section className="section">
    <div className="container section-content" id="what-we-do-section" data-background={props.background}>
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
        </div>
      </div>
    </div>
  </section>);

export default WhatWeDo;
