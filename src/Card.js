import React from "react";

const Card = (props) => {//({ name, email , id }) and get rid of props
const { email, name, id } = props; //<<<destructuring looks cleaner...can also say props.email, props.name, props.id
return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
