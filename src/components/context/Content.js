import React from "react";

const Content = ({ theme }) => {
  return (
    <div className="container mt-2">
      <p className={`fs-3 ${theme}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        voluptas eum voluptatibus provident fugit eaque odio. Minima recusandae
        dolore blanditiis obcaecati, voluptatibus tenetur voluptatum, libero
        quos tempore laboriosam, accusamus quibusdam.
      </p>
    </div>
  );
};

export default Content;
