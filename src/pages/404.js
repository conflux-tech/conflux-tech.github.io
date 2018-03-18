import React from 'react';
import Button from '../components/button';

const NotFoundPage = props =>
  (<main>
    <div className="container" id="not-found-page">
      <div className="row justify-content-md-center">
        <div className="col-lg-12 text-center">
          <h1>404</h1>
          <p>Sorry, the page you are looking is no where to be found.</p>
          <br />
          <Button text="Go back to homepage" link="/" />
        </div>
      </div>
    </div>
    </main>);

export default NotFoundPage;
