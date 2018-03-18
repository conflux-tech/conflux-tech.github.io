import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import inView from 'in-view';
import $ from 'jquery';

import '../../sass/style.scss';

class TemplateWrapper extends React.Component {
  componentDidMount() {
    let target = $('.wrapper');
    inView('.section-content').on('enter', (el) => {
      let background = $(el).data('background');
      target.css('background', background);
      target.css('background-attachment', 'fixed');
      target.css('background-position', 'center');
      target.css('background-size', 'cover');
    });

    $('#scroll-to').on('click', () => {
      $('html, body').animate({
        scrollTop: $('#about-section').offset().top
      }, 500)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>Conflux</title>
          <meta property="og:site_name" content="Conflux" />
          <meta property="og:title" content="Conflux" />
          <meta property="og:description" content="Conflux builds internet companies" />
          <meta property="og:url" content="https://conflux.tech" />
          <meta property="og:type" conten="website" />
          <meta property="twitter:title" content="Conflux" />
          <meta property="twitter:url" content="https://conflux.tech" />
          <meta name="keywords" content="conflux, startup, web development, mobile development" />
          <link rel="canonical" href="https://conflux.tech" />
        </Helmet>
        {this.props.children()}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
