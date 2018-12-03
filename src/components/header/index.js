import React from 'react';

import './_header.scss';

const Header = props =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <span className="header-logo">{props.title}</span>
            <nav className="header-nav d-none d-xl-block">
              <ul className="header-nav-list">
                <li className="header-nav-list-item" data-navigate="#hero-section">
                  <a href="#">What</a>
                </li>
                <li className="header-nav-list-item" data-navigate="#about-section">
                  <a href="#">Who</a>
                </li>
                <li className="header-nav-list-item" data-navigate="#why-section">
                  <a href="#">Why</a>
                </li>
                <li className="header-nav-list-item" data-navigate="#how-section">
                  <a href="#">How</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;

