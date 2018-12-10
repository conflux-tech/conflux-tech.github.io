import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import inView from 'in-view';
import $ from 'jquery';

import '../../sass/style.scss';

class TemplateWrapper extends React.Component {
  componentDidMount() {
    const target = $('.wrapper');
    inView('.section-content').on('enter', (el) => {
      const background = $(el).data('background');
      const textColor = $(el).data('text-color');
      const section = $(el).parent().attr('id');
      $('.header-content').css('color', textColor);
      $('.header-nav-list-item a').css('color', textColor);
      target.css('background', background);
      $('.header').css('background', background);
      target.css('background-attachment', 'fixed');
      target.css('background-position', 'center');
      target.css('background-size', 'cover');
    });

    $('#scroll-to').on('click', () => {
      $('html, body').animate({
        scrollTop: $('#about-section').offset().top,
      }, 500);
    });

    $('.header-nav-list-item').on('click', (el) => {
      const currentEl = $(el.currentTarget);
      const navigate = currentEl.data('navigate');
      $('html, body').animate({
        scrollTop: $(navigate).offset().top,
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>Web and Mobile App Development in Thailand | Conflux Tech</title>
          <meta property="description" content="We use talent and technology to design and build Web and Mobile Apps for Startups and Enterprises. Get a quote on your project now." />
          <meta property="og:site_name" content="Conflux Tech" />
          <meta property="og:title" content="Web and Mobile App Development in Thailand | Conflux Tech" />
          <meta property="og:description" content="We use talent and technology to design and build Web and Mobile Apps for Startups and Enterprises. Get a quote on your project now." />
          <meta property="og:url" content="https://conflux.tech" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://conflux.tech/images/preview.png" />
          <meta property="twitter:title" content="Web and Mobile App Development in Thailand | Conflux Tech" />
          <meta property="twitter:url" content="https://conflux.tech" />
          <meta property="twitter:image" content="https://conflux.tech/images/preview.png" />
          <meta name="keywords" content="conflux, conflux tech, startup, web development, mobile development, thailand, web development in thailand, mobile app development in thailand" />
          <link rel="canonical" href="https://conflux.tech" />
          <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
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
