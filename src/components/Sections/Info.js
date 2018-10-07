import React from 'react';
import Package from '../../../package.json';

const { name, description } = Package;

const Info = () => (
  <section className="jumbotron text-center bg-white">
    <div className="container">
      <h1 className="jumbotron-heading">{name.toUpperCase()}</h1>
      <p className="lead text-muted">{description}</p>
    </div>
  </section>
);

export default Info;
