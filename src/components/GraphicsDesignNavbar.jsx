import React from 'react';

export const GraphicsDesignNavbar = ({ data }) => {
  return (
    <nav>
      <ul>
        <h2>Logo & Brand Identity</h2>
        {data[0].logoAndBrandIdentity.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Gaming</h2>
        {data[0].gaming.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Art & Illustration</h2>
        {data[0].artAndIllustration.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Web & App Design</h2>
        {data[0].webAndAppDesign.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Social Media</h2>
        {data[0].socialMedia.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Packaging & Labels</h2>
        {data[0].packagingAndLabels.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Visual Design</h2>
        {data[0].visualDesign.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Architecture & Building Design</h2>
        {data[0].architectureAndBuildingDesign.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Fashion & Merchandise</h2>
        {data[0].fashionAndMerchandise.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Print Design</h2>
        {data[0].printDesign.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Product & Characters Design</h2>
        {data[0].productAndCharactersDesign.map((link) => {
          return <li key={link}>{link}</li>;
        })}
        <h2>Misc.</h2>
        {data[0].misc.map((link) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>
    </nav>
  );
};
