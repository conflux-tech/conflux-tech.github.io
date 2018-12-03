import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer section" id="how-section">
    <div className="container section-content" data-background="#000">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
              <span>Every idea starts with a conversation, <a href="mailto:info@conflux.tech">so let's have one</a></span>
              <span className="d-none d-xl-block">Email us at: <a href="mailto:info@conflux.tech">info@conflux.tech</a></span>
              {/* <Icon icon={Github} fill="#FFF" widht="50px" height="50px" /> */}
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
