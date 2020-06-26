import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, url, ogImage, keywords } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Conflux'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Conflux'} />
        <meta property="description" content={description} />
        <meta property="og:site_name" content="Conflux" />
        <meta property="og_title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:image" content={ogImage} />
        <meta name="keywords" content={keywords.join(',')} />
        <meta
          name="google-site-verification"
          content="VGX_sKkC_A0LTDNYF-QXuISDoiYD7GFj0QpKQ3TGZf4"
        />
      </Helmet>
      <App />
    </>
  );
};
