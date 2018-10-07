import React from 'react';
import Package from '../../../package.json';

const { name, description } = Package;

const Info = () => (
  <section className="jumbotron text-center bg-white" style={{margin: '0', padding: '16px 0'}}>
    <div className="container" style={{marginTop: '0'}}>
      <h3 className="jumbotron-heading">{name.toUpperCase()}</h3>
      <p className="lead text-muted">{description}</p>
    </div>
  </section>
);

export default Info;
