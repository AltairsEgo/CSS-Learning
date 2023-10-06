import React from "react";
import { DetailInterface } from "./Detailnterface";

const Details: React.FC<DetailInterface> = ({ detail }) => {
  return (
    <React.Fragment>
      <p>{detail}</p>
    </React.Fragment>
  );
};

export default Details;
