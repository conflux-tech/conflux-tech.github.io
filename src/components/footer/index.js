import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer section">
    <div className="container section-content" data-background="#000">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
              <span>Every idea starts with a conversation, <a href="#">so let us have one</a></span>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
