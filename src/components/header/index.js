import React from 'react';

import './_header.scss';

const Header = props =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <span className="header-logo">
              {props.title}
            </span>
            <nav className="header-nav">
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;

