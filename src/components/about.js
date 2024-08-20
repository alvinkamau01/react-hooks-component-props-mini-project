import React from 'react';

function About({ image, about }) {
  const placeholderImage = "https://via.placeholder.com/215";

  return (
    <aside>
      <img
        src={image || placeholderImage}
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;
