import React from "react";

export const Header = ({ data }) => {
  const { name, tagline, bio } = data;

  return (
    <header>
      <h1>{name}</h1>
      <p className="tagline">{tagline}</p>
      <div className="mb-20"></div>
      <h2>BIO</h2>
      {
        bio?.map((p, idx) => (
          <p key={`bio-${idx}`}>{p}</p>
        ))
      }

    </header>
  );
};