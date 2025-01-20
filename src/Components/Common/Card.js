import React from "react";
import '../../Css/Card.css'


function Card(props) {
    const {title,description,email,location,Phone, image} = props;
  return (
   
    <div className="card">
        <img src={image} alt=""></img>
        <h2>{title}</h2>
        <p>
                   {description}
        </p>

        <div className="details">
        <ul>
        <li><strong>Email : </strong> {email}</li>
        <li><strong>Phone : </strong> {Phone}</li>
        <li><strong>Location : </strong> {location}</li>
      </ul>
        </div>

    </div>
  

  );
}

export default Card;
