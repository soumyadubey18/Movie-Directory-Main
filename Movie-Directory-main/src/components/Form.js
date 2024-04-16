import React from "react";

const Form = ({ detail }) => {
  return (
    <tr>
      <td>{detail.movie}</td>
      <td>{detail.rating}</td>
      <td>{detail.duration}</td>
    </tr>
  );
};

export default Form;
